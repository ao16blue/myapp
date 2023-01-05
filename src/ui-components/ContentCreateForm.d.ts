/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContentCreateFormInputValues = {
    Author?: string;
    Category?: string;
    title?: string;
    thumb?: string;
    description?: string;
    content?: string;
    contentAuthorId?: string;
    contentCategoryId?: string;
};
export declare type ContentCreateFormValidationValues = {
    Author?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    thumb?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    contentAuthorId?: ValidationFunction<string>;
    contentCategoryId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentCreateFormOverridesProps = {
    ContentCreateFormGrid?: FormProps<GridProps>;
    Author?: FormProps<SelectFieldProps>;
    Category?: FormProps<SelectFieldProps>;
    title?: FormProps<TextFieldProps>;
    thumb?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    content?: FormProps<TextFieldProps>;
    contentAuthorId?: FormProps<TextFieldProps>;
    contentCategoryId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContentCreateFormProps = React.PropsWithChildren<{
    overrides?: ContentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContentCreateFormInputValues) => ContentCreateFormInputValues;
    onSuccess?: (fields: ContentCreateFormInputValues) => void;
    onError?: (fields: ContentCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ContentCreateFormInputValues) => ContentCreateFormInputValues;
    onValidate?: ContentCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContentCreateForm(props: ContentCreateFormProps): React.ReactElement;
