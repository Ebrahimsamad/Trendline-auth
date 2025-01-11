import { FormInput } from "./FormInput";

export const B2BFields = ({ register, errors }) => (
  <>
    <FormInput
      id="issuing_authority"
      label="Issuing Authority"
      register={register}
      error={errors.issuing_authority}
    />
    <FormInput
      id="company_name"
      label="Company Name"
      register={register}
      error={errors.company_name}
    />
    <FormInput
      id="commercial_license_number"
      label="Commercial License Number"
      register={register}
      error={errors.commercial_license_number}
    />
  </>
);
