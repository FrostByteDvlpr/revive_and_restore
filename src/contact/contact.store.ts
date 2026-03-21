import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, exhaustMap, tap } from 'rxjs';
import { environment } from '../../environment/environment';

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export const ContactStore = signalStore(
  withState<{
    submitted: boolean;
    loading: boolean;
    success: boolean;
    errors: ValidationErrors;
    touched: string[];
    form: ContactForm;
  }>({
    submitted: false,
    loading: false,
    success: false,
    errors: {},
    touched: [],
    form: {
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    },
  }),
  withMethods((state) => {
    const http = inject(HttpClient);

    const isValidEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValidPhone = (phone: string): boolean => {
      const cleaned = phone.replace(/\D/g, '');
      return cleaned.length >= 10 && cleaned.length <= 11;
    };

    const validateField = (field: keyof ContactForm) => {
      const form = state.form();
      const errors = { ...state.errors() };

      switch (field) {
        case 'name':
          if (!form.name?.trim()) {
            errors.name = 'Name is required';
          } else if (form.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
          } else if (form.name.trim().length > 100) {
            errors.name = 'Name must be less than 100 characters';
          } else {
            delete errors.name;
          }
          break;

        case 'email':
          if (!form.email?.trim()) {
            errors.email = 'Email is required';
          } else if (!isValidEmail(form.email)) {
            errors.email = 'Please enter a valid email address';
          } else {
            delete errors.email;
          }
          break;

        case 'phone':
          if (!form.phone?.trim()) {
            errors.phone = 'Phone number is required';
          } else if (!isValidPhone(form.phone)) {
            errors.phone = 'Please enter a valid phone number';
          } else {
            delete errors.phone;
          }
          break;

        case 'inquiryType':
          if (!form.inquiryType) {
            errors.inquiryType = 'Please select an inquiry type';
          } else {
            delete errors.inquiryType;
          }
          break;

        case 'message':
          if (!form.message?.trim()) {
            errors.message = 'Message is required';
          } else if (form.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
          } else if (form.message.trim().length > 1000) {
            errors.message = 'Message must be less than 1000 characters';
          } else {
            delete errors.message;
          }
          break;
      }

      patchState(state, { errors });
    };

    const validateAllFields = () => {
      const fields: Array<keyof ContactForm> = [
        'name',
        'email',
        'phone',
        'inquiryType',
        'message',
      ];
      fields.forEach((field) => validateField(field));
    };

    const isFormValid = (): boolean => {
      validateAllFields();
      return Object.keys(state.errors()).length === 0;
    };

    return {
      submitForm: rxMethod<void>((submit$) =>
        submit$.pipe(
          tap(() => {
            console.log('Submitting contact form with data:', state.form());
            patchState(state, { submitted: true });
            console.log('Form validity after validation:', isFormValid());
            if (!isFormValid()) {
              return;
            }

            patchState(state, { loading: true, success: false });
          }),
          exhaustMap(() => {
            if (!isFormValid()) {
              return EMPTY;
            }

            return http
              .post(`${environment.apiUrl}/contact`, state.form())
              .pipe(
                tap(() => {
                  patchState(state, {
                    loading: false,
                    success: true,
                    form: {
                      name: '',
                      email: '',
                      phone: '',
                      inquiryType: '',
                      message: '',
                    },
                    errors: {},
                    touched: [],
                    submitted: false,
                  });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }),
                catchError((error) => {
                  console.error('Contact form submission error:', error);
                  patchState(state, {
                    loading: false,
                    errors: {
                      message:
                        'Failed to send message. Please try again later.',
                    },
                  });
                  return EMPTY;
                }),
              );
          }),
        ),
      ),

      updateField: <K extends keyof ContactForm>(field: K, value: string) => {
        const form = { ...state.form() };
        form[field] = value;
        patchState(state, { form, success: false });
        validateField(field);
      },

      markTouched: (field: string) => {
        const touched = state.touched();
        if (!touched.includes(field)) {
          patchState(state, { touched: [...touched, field] });
        }
      },

      validateField,
      validateAllFields,
      isValidEmail,
      isValidPhone,
      isFormValid,

      shouldShowError(field: string): boolean {
        return (
          (state.touched().includes(field) || state.submitted()) &&
          !!state.errors()[field as keyof ValidationErrors]
        );
      },

      getError(field: string): string | undefined {
        return state.errors()[field as keyof ValidationErrors];
      },

      resetForm: () => {
        patchState(state, {
          form: {
            name: '',
            email: '',
            phone: '',
            inquiryType: '',
            message: '',
          },
          errors: {},
          touched: [],
          submitted: false,
          success: false,
        });
      },
    };
  }),
);
