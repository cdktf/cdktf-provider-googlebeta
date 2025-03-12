// https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDocumentAiWarehouseDocumentSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the schema given by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#display_name GoogleDocumentAiWarehouseDocumentSchema#display_name}
  */
  readonly displayName: string;
  /**
  * Tells whether the document is a folder or a typical document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#document_is_folder GoogleDocumentAiWarehouseDocumentSchema#document_is_folder}
  */
  readonly documentIsFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#id GoogleDocumentAiWarehouseDocumentSchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#location GoogleDocumentAiWarehouseDocumentSchema#location}
  */
  readonly location: string;
  /**
  * The unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#project_number GoogleDocumentAiWarehouseDocumentSchema#project_number}
  */
  readonly projectNumber: string;
  /**
  * property_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#property_definitions GoogleDocumentAiWarehouseDocumentSchema#property_definitions}
  */
  readonly propertyDefinitions: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#timeouts GoogleDocumentAiWarehouseDocumentSchema#timeouts}
  */
  readonly timeouts?: GoogleDocumentAiWarehouseDocumentSchemaTimeouts;
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions {
  /**
  * List of possible enum values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#possible_values GoogleDocumentAiWarehouseDocumentSchema#possible_values}
  */
  readonly possibleValues: string[];
  /**
  * Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#validation_check_disabled GoogleDocumentAiWarehouseDocumentSchema#validation_check_disabled}
  */
  readonly validationCheckDisabled?: boolean | cdktf.IResolvable;
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    possible_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.possibleValues),
    validation_check_disabled: cdktf.booleanToTerraform(struct!.validationCheckDisabled),
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    possible_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.possibleValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    validation_check_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.validationCheckDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._possibleValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.possibleValues = this._possibleValues;
    }
    if (this._validationCheckDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationCheckDisabled = this._validationCheckDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._possibleValues = undefined;
      this._validationCheckDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._possibleValues = value.possibleValues;
      this._validationCheckDisabled = value.validationCheckDisabled;
    }
  }

  // possible_values - computed: false, optional: false, required: true
  private _possibleValues?: string[]; 
  public get possibleValues() {
    return this.getListAttribute('possible_values');
  }
  public set possibleValues(value: string[]) {
    this._possibleValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get possibleValuesInput() {
    return this._possibleValues;
  }

  // validation_check_disabled - computed: false, optional: true, required: false
  private _validationCheckDisabled?: boolean | cdktf.IResolvable; 
  public get validationCheckDisabled() {
    return this.getBooleanAttribute('validation_check_disabled');
  }
  public set validationCheckDisabled(value: boolean | cdktf.IResolvable) {
    this._validationCheckDisabled = value;
  }
  public resetValidationCheckDisabled() {
    this._validationCheckDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCheckDisabledInput() {
    return this._validationCheckDisabled;
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions {
  /**
  * List of possible enum values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#possible_values GoogleDocumentAiWarehouseDocumentSchema#possible_values}
  */
  readonly possibleValues: string[];
  /**
  * Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#validation_check_disabled GoogleDocumentAiWarehouseDocumentSchema#validation_check_disabled}
  */
  readonly validationCheckDisabled?: boolean | cdktf.IResolvable;
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    possible_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.possibleValues),
    validation_check_disabled: cdktf.booleanToTerraform(struct!.validationCheckDisabled),
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    possible_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.possibleValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    validation_check_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.validationCheckDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._possibleValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.possibleValues = this._possibleValues;
    }
    if (this._validationCheckDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationCheckDisabled = this._validationCheckDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._possibleValues = undefined;
      this._validationCheckDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._possibleValues = value.possibleValues;
      this._validationCheckDisabled = value.validationCheckDisabled;
    }
  }

  // possible_values - computed: false, optional: false, required: true
  private _possibleValues?: string[]; 
  public get possibleValues() {
    return this.getListAttribute('possible_values');
  }
  public set possibleValues(value: string[]) {
    this._possibleValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get possibleValuesInput() {
    return this._possibleValues;
  }

  // validation_check_disabled - computed: false, optional: true, required: false
  private _validationCheckDisabled?: boolean | cdktf.IResolvable; 
  public get validationCheckDisabled() {
    return this.getBooleanAttribute('validation_check_disabled');
  }
  public set validationCheckDisabled(value: boolean | cdktf.IResolvable) {
    this._validationCheckDisabled = value;
  }
  public resetValidationCheckDisabled() {
    this._validationCheckDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCheckDisabledInput() {
    return this._validationCheckDisabled;
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources {
  /**
  * The schema name in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#name GoogleDocumentAiWarehouseDocumentSchema#name}
  */
  readonly name?: string;
  /**
  * The Doc AI processor type name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#processor_type GoogleDocumentAiWarehouseDocumentSchema#processor_type}
  */
  readonly processorType?: string;
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processor_type: cdktf.stringToTerraform(struct!.processorType),
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processor_type: {
      value: cdktf.stringToHclTerraform(struct!.processorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorType = this._processorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processorType = value.processorType;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // processor_type - computed: false, optional: true, required: false
  private _processorType?: string; 
  public get processorType() {
    return this.getStringAttribute('processor_type');
  }
  public set processorType(value: string) {
    this._processorType = value;
  }
  public resetProcessorType() {
    this._processorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorTypeInput() {
    return this._processorType;
  }
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference {
    return new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions {
  /**
  * The display-name for the property, used for front-end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#display_name GoogleDocumentAiWarehouseDocumentSchema#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_filterable GoogleDocumentAiWarehouseDocumentSchema#is_filterable}
  */
  readonly isFilterable?: boolean | cdktf.IResolvable;
  /**
  * Whether the property is user supplied metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_metadata GoogleDocumentAiWarehouseDocumentSchema#is_metadata}
  */
  readonly isMetadata?: boolean | cdktf.IResolvable;
  /**
  * Whether the property can have multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_repeatable GoogleDocumentAiWarehouseDocumentSchema#is_repeatable}
  */
  readonly isRepeatable?: boolean | cdktf.IResolvable;
  /**
  * Whether the property is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_required GoogleDocumentAiWarehouseDocumentSchema#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the property should be included in a global search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_searchable GoogleDocumentAiWarehouseDocumentSchema#is_searchable}
  */
  readonly isSearchable?: boolean | cdktf.IResolvable;
  /**
  * The name of the metadata property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#name GoogleDocumentAiWarehouseDocumentSchema#name}
  */
  readonly name: string;
  /**
  * Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#retrieval_importance GoogleDocumentAiWarehouseDocumentSchema#retrieval_importance}
  */
  readonly retrievalImportance?: string;
  /**
  * date_time_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#date_time_type_options GoogleDocumentAiWarehouseDocumentSchema#date_time_type_options}
  */
  readonly dateTimeTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions;
  /**
  * enum_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#enum_type_options GoogleDocumentAiWarehouseDocumentSchema#enum_type_options}
  */
  readonly enumTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions;
  /**
  * float_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#float_type_options GoogleDocumentAiWarehouseDocumentSchema#float_type_options}
  */
  readonly floatTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions;
  /**
  * integer_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#integer_type_options GoogleDocumentAiWarehouseDocumentSchema#integer_type_options}
  */
  readonly integerTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions;
  /**
  * map_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#map_type_options GoogleDocumentAiWarehouseDocumentSchema#map_type_options}
  */
  readonly mapTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions;
  /**
  * schema_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#schema_sources GoogleDocumentAiWarehouseDocumentSchema#schema_sources}
  */
  readonly schemaSources?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[] | cdktf.IResolvable;
  /**
  * text_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#text_type_options GoogleDocumentAiWarehouseDocumentSchema#text_type_options}
  */
  readonly textTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions;
  /**
  * timestamp_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#timestamp_type_options GoogleDocumentAiWarehouseDocumentSchema#timestamp_type_options}
  */
  readonly timestampTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions;
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_filterable: cdktf.booleanToTerraform(struct!.isFilterable),
    is_metadata: cdktf.booleanToTerraform(struct!.isMetadata),
    is_repeatable: cdktf.booleanToTerraform(struct!.isRepeatable),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    is_searchable: cdktf.booleanToTerraform(struct!.isSearchable),
    name: cdktf.stringToTerraform(struct!.name),
    retrieval_importance: cdktf.stringToTerraform(struct!.retrievalImportance),
    date_time_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsToTerraform(struct!.dateTimeTypeOptions),
    enum_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsToTerraform(struct!.enumTypeOptions),
    float_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsToTerraform(struct!.floatTypeOptions),
    integer_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsToTerraform(struct!.integerTypeOptions),
    map_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsToTerraform(struct!.mapTypeOptions),
    schema_sources: cdktf.listMapper(googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesToTerraform, true)(struct!.schemaSources),
    text_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsToTerraform(struct!.textTypeOptions),
    timestamp_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsToTerraform(struct!.timestampTypeOptions),
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_filterable: {
      value: cdktf.booleanToHclTerraform(struct!.isFilterable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.isMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_repeatable: {
      value: cdktf.booleanToHclTerraform(struct!.isRepeatable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_searchable: {
      value: cdktf.booleanToHclTerraform(struct!.isSearchable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrieval_importance: {
      value: cdktf.stringToHclTerraform(struct!.retrievalImportance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_time_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsToHclTerraform(struct!.dateTimeTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsList",
    },
    enum_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsToHclTerraform(struct!.enumTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsList",
    },
    float_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsToHclTerraform(struct!.floatTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsList",
    },
    integer_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsToHclTerraform(struct!.integerTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsList",
    },
    map_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsToHclTerraform(struct!.mapTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsList",
    },
    schema_sources: {
      value: cdktf.listMapperHcl(googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesToHclTerraform, true)(struct!.schemaSources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList",
    },
    text_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsToHclTerraform(struct!.textTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsList",
    },
    timestamp_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsToHclTerraform(struct!.timestampTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isFilterable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFilterable = this._isFilterable;
    }
    if (this._isMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetadata = this._isMetadata;
    }
    if (this._isRepeatable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRepeatable = this._isRepeatable;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._isSearchable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSearchable = this._isSearchable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retrievalImportance !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalImportance = this._retrievalImportance;
    }
    if (this._dateTimeTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeTypeOptions = this._dateTimeTypeOptions?.internalValue;
    }
    if (this._enumTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumTypeOptions = this._enumTypeOptions?.internalValue;
    }
    if (this._floatTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatTypeOptions = this._floatTypeOptions?.internalValue;
    }
    if (this._integerTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerTypeOptions = this._integerTypeOptions?.internalValue;
    }
    if (this._mapTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTypeOptions = this._mapTypeOptions?.internalValue;
    }
    if (this._schemaSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaSources = this._schemaSources?.internalValue;
    }
    if (this._textTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTypeOptions = this._textTypeOptions?.internalValue;
    }
    if (this._timestampTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampTypeOptions = this._timestampTypeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._isFilterable = undefined;
      this._isMetadata = undefined;
      this._isRepeatable = undefined;
      this._isRequired = undefined;
      this._isSearchable = undefined;
      this._name = undefined;
      this._retrievalImportance = undefined;
      this._dateTimeTypeOptions.internalValue = undefined;
      this._enumTypeOptions.internalValue = undefined;
      this._floatTypeOptions.internalValue = undefined;
      this._integerTypeOptions.internalValue = undefined;
      this._mapTypeOptions.internalValue = undefined;
      this._schemaSources.internalValue = undefined;
      this._textTypeOptions.internalValue = undefined;
      this._timestampTypeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._isFilterable = value.isFilterable;
      this._isMetadata = value.isMetadata;
      this._isRepeatable = value.isRepeatable;
      this._isRequired = value.isRequired;
      this._isSearchable = value.isSearchable;
      this._name = value.name;
      this._retrievalImportance = value.retrievalImportance;
      this._dateTimeTypeOptions.internalValue = value.dateTimeTypeOptions;
      this._enumTypeOptions.internalValue = value.enumTypeOptions;
      this._floatTypeOptions.internalValue = value.floatTypeOptions;
      this._integerTypeOptions.internalValue = value.integerTypeOptions;
      this._mapTypeOptions.internalValue = value.mapTypeOptions;
      this._schemaSources.internalValue = value.schemaSources;
      this._textTypeOptions.internalValue = value.textTypeOptions;
      this._timestampTypeOptions.internalValue = value.timestampTypeOptions;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_filterable - computed: false, optional: true, required: false
  private _isFilterable?: boolean | cdktf.IResolvable; 
  public get isFilterable() {
    return this.getBooleanAttribute('is_filterable');
  }
  public set isFilterable(value: boolean | cdktf.IResolvable) {
    this._isFilterable = value;
  }
  public resetIsFilterable() {
    this._isFilterable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFilterableInput() {
    return this._isFilterable;
  }

  // is_metadata - computed: false, optional: true, required: false
  private _isMetadata?: boolean | cdktf.IResolvable; 
  public get isMetadata() {
    return this.getBooleanAttribute('is_metadata');
  }
  public set isMetadata(value: boolean | cdktf.IResolvable) {
    this._isMetadata = value;
  }
  public resetIsMetadata() {
    this._isMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetadataInput() {
    return this._isMetadata;
  }

  // is_repeatable - computed: false, optional: true, required: false
  private _isRepeatable?: boolean | cdktf.IResolvable; 
  public get isRepeatable() {
    return this.getBooleanAttribute('is_repeatable');
  }
  public set isRepeatable(value: boolean | cdktf.IResolvable) {
    this._isRepeatable = value;
  }
  public resetIsRepeatable() {
    this._isRepeatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRepeatableInput() {
    return this._isRepeatable;
  }

  // is_required - computed: false, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // is_searchable - computed: false, optional: true, required: false
  private _isSearchable?: boolean | cdktf.IResolvable; 
  public get isSearchable() {
    return this.getBooleanAttribute('is_searchable');
  }
  public set isSearchable(value: boolean | cdktf.IResolvable) {
    this._isSearchable = value;
  }
  public resetIsSearchable() {
    this._isSearchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSearchableInput() {
    return this._isSearchable;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retrieval_importance - computed: false, optional: true, required: false
  private _retrievalImportance?: string; 
  public get retrievalImportance() {
    return this.getStringAttribute('retrieval_importance');
  }
  public set retrievalImportance(value: string) {
    this._retrievalImportance = value;
  }
  public resetRetrievalImportance() {
    this._retrievalImportance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalImportanceInput() {
    return this._retrievalImportance;
  }

  // date_time_type_options - computed: false, optional: true, required: false
  private _dateTimeTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference(this, "date_time_type_options");
  public get dateTimeTypeOptions() {
    return this._dateTimeTypeOptions;
  }
  public putDateTimeTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions) {
    this._dateTimeTypeOptions.internalValue = value;
  }
  public resetDateTimeTypeOptions() {
    this._dateTimeTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeTypeOptionsInput() {
    return this._dateTimeTypeOptions.internalValue;
  }

  // enum_type_options - computed: false, optional: true, required: false
  private _enumTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference(this, "enum_type_options");
  public get enumTypeOptions() {
    return this._enumTypeOptions;
  }
  public putEnumTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions) {
    this._enumTypeOptions.internalValue = value;
  }
  public resetEnumTypeOptions() {
    this._enumTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumTypeOptionsInput() {
    return this._enumTypeOptions.internalValue;
  }

  // float_type_options - computed: false, optional: true, required: false
  private _floatTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference(this, "float_type_options");
  public get floatTypeOptions() {
    return this._floatTypeOptions;
  }
  public putFloatTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions) {
    this._floatTypeOptions.internalValue = value;
  }
  public resetFloatTypeOptions() {
    this._floatTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatTypeOptionsInput() {
    return this._floatTypeOptions.internalValue;
  }

  // integer_type_options - computed: false, optional: true, required: false
  private _integerTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference(this, "integer_type_options");
  public get integerTypeOptions() {
    return this._integerTypeOptions;
  }
  public putIntegerTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions) {
    this._integerTypeOptions.internalValue = value;
  }
  public resetIntegerTypeOptions() {
    this._integerTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerTypeOptionsInput() {
    return this._integerTypeOptions.internalValue;
  }

  // map_type_options - computed: false, optional: true, required: false
  private _mapTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference(this, "map_type_options");
  public get mapTypeOptions() {
    return this._mapTypeOptions;
  }
  public putMapTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions) {
    this._mapTypeOptions.internalValue = value;
  }
  public resetMapTypeOptions() {
    this._mapTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTypeOptionsInput() {
    return this._mapTypeOptions.internalValue;
  }

  // schema_sources - computed: false, optional: true, required: false
  private _schemaSources = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList(this, "schema_sources", false);
  public get schemaSources() {
    return this._schemaSources;
  }
  public putSchemaSources(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[] | cdktf.IResolvable) {
    this._schemaSources.internalValue = value;
  }
  public resetSchemaSources() {
    this._schemaSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSourcesInput() {
    return this._schemaSources.internalValue;
  }

  // text_type_options - computed: false, optional: true, required: false
  private _textTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference(this, "text_type_options");
  public get textTypeOptions() {
    return this._textTypeOptions;
  }
  public putTextTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions) {
    this._textTypeOptions.internalValue = value;
  }
  public resetTextTypeOptions() {
    this._textTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTypeOptionsInput() {
    return this._textTypeOptions.internalValue;
  }

  // timestamp_type_options - computed: false, optional: true, required: false
  private _timestampTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference(this, "timestamp_type_options");
  public get timestampTypeOptions() {
    return this._timestampTypeOptions;
  }
  public putTimestampTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions) {
    this._timestampTypeOptions.internalValue = value;
  }
  public resetTimestampTypeOptions() {
    this._timestampTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTypeOptionsInput() {
    return this._timestampTypeOptions.internalValue;
  }
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference {
    return new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions {
  /**
  * property_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#property_definitions GoogleDocumentAiWarehouseDocumentSchema#property_definitions}
  */
  readonly propertyDefinitions: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[] | cdktf.IResolvable;
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property_definitions: cdktf.listMapper(googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsToTerraform, true)(struct!.propertyDefinitions),
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property_definitions: {
      value: cdktf.listMapperHcl(googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsToHclTerraform, true)(struct!.propertyDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyDefinitions = this._propertyDefinitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertyDefinitions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertyDefinitions.internalValue = value.propertyDefinitions;
    }
  }

  // property_definitions - computed: false, optional: false, required: true
  private _propertyDefinitions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList(this, "property_definitions", false);
  public get propertyDefinitions() {
    return this._propertyDefinitions;
  }
  public putPropertyDefinitions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[] | cdktf.IResolvable) {
    this._propertyDefinitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyDefinitionsInput() {
    return this._propertyDefinitions.internalValue;
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources {
  /**
  * The schema name in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#name GoogleDocumentAiWarehouseDocumentSchema#name}
  */
  readonly name?: string;
  /**
  * The Doc AI processor type name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#processor_type GoogleDocumentAiWarehouseDocumentSchema#processor_type}
  */
  readonly processorType?: string;
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processor_type: cdktf.stringToTerraform(struct!.processorType),
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processor_type: {
      value: cdktf.stringToHclTerraform(struct!.processorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorType = this._processorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processorType = value.processorType;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // processor_type - computed: false, optional: true, required: false
  private _processorType?: string; 
  public get processorType() {
    return this.getStringAttribute('processor_type');
  }
  public set processorType(value: string) {
    this._processorType = value;
  }
  public resetProcessorType() {
    this._processorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorTypeInput() {
    return this._processorType;
  }
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference {
    return new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions {
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference | GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions {
  /**
  * The display-name for the property, used for front-end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#display_name GoogleDocumentAiWarehouseDocumentSchema#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_filterable GoogleDocumentAiWarehouseDocumentSchema#is_filterable}
  */
  readonly isFilterable?: boolean | cdktf.IResolvable;
  /**
  * Whether the property is user supplied metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_metadata GoogleDocumentAiWarehouseDocumentSchema#is_metadata}
  */
  readonly isMetadata?: boolean | cdktf.IResolvable;
  /**
  * Whether the property can have multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_repeatable GoogleDocumentAiWarehouseDocumentSchema#is_repeatable}
  */
  readonly isRepeatable?: boolean | cdktf.IResolvable;
  /**
  * Whether the property is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_required GoogleDocumentAiWarehouseDocumentSchema#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the property should be included in a global search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#is_searchable GoogleDocumentAiWarehouseDocumentSchema#is_searchable}
  */
  readonly isSearchable?: boolean | cdktf.IResolvable;
  /**
  * The name of the metadata property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#name GoogleDocumentAiWarehouseDocumentSchema#name}
  */
  readonly name: string;
  /**
  * Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#retrieval_importance GoogleDocumentAiWarehouseDocumentSchema#retrieval_importance}
  */
  readonly retrievalImportance?: string;
  /**
  * date_time_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#date_time_type_options GoogleDocumentAiWarehouseDocumentSchema#date_time_type_options}
  */
  readonly dateTimeTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions;
  /**
  * enum_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#enum_type_options GoogleDocumentAiWarehouseDocumentSchema#enum_type_options}
  */
  readonly enumTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions;
  /**
  * float_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#float_type_options GoogleDocumentAiWarehouseDocumentSchema#float_type_options}
  */
  readonly floatTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions;
  /**
  * integer_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#integer_type_options GoogleDocumentAiWarehouseDocumentSchema#integer_type_options}
  */
  readonly integerTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions;
  /**
  * map_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#map_type_options GoogleDocumentAiWarehouseDocumentSchema#map_type_options}
  */
  readonly mapTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions;
  /**
  * property_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#property_type_options GoogleDocumentAiWarehouseDocumentSchema#property_type_options}
  */
  readonly propertyTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions;
  /**
  * schema_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#schema_sources GoogleDocumentAiWarehouseDocumentSchema#schema_sources}
  */
  readonly schemaSources?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[] | cdktf.IResolvable;
  /**
  * text_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#text_type_options GoogleDocumentAiWarehouseDocumentSchema#text_type_options}
  */
  readonly textTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions;
  /**
  * timestamp_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#timestamp_type_options GoogleDocumentAiWarehouseDocumentSchema#timestamp_type_options}
  */
  readonly timestampTypeOptions?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions;
}

export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_filterable: cdktf.booleanToTerraform(struct!.isFilterable),
    is_metadata: cdktf.booleanToTerraform(struct!.isMetadata),
    is_repeatable: cdktf.booleanToTerraform(struct!.isRepeatable),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    is_searchable: cdktf.booleanToTerraform(struct!.isSearchable),
    name: cdktf.stringToTerraform(struct!.name),
    retrieval_importance: cdktf.stringToTerraform(struct!.retrievalImportance),
    date_time_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsToTerraform(struct!.dateTimeTypeOptions),
    enum_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsToTerraform(struct!.enumTypeOptions),
    float_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsToTerraform(struct!.floatTypeOptions),
    integer_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsToTerraform(struct!.integerTypeOptions),
    map_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsToTerraform(struct!.mapTypeOptions),
    property_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsToTerraform(struct!.propertyTypeOptions),
    schema_sources: cdktf.listMapper(googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesToTerraform, true)(struct!.schemaSources),
    text_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsToTerraform(struct!.textTypeOptions),
    timestamp_type_options: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsToTerraform(struct!.timestampTypeOptions),
  }
}


export function googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_filterable: {
      value: cdktf.booleanToHclTerraform(struct!.isFilterable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.isMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_repeatable: {
      value: cdktf.booleanToHclTerraform(struct!.isRepeatable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_searchable: {
      value: cdktf.booleanToHclTerraform(struct!.isSearchable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrieval_importance: {
      value: cdktf.stringToHclTerraform(struct!.retrievalImportance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_time_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsToHclTerraform(struct!.dateTimeTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsList",
    },
    enum_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsToHclTerraform(struct!.enumTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsList",
    },
    float_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsToHclTerraform(struct!.floatTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsList",
    },
    integer_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsToHclTerraform(struct!.integerTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsList",
    },
    map_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsToHclTerraform(struct!.mapTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsList",
    },
    property_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsToHclTerraform(struct!.propertyTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsList",
    },
    schema_sources: {
      value: cdktf.listMapperHcl(googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesToHclTerraform, true)(struct!.schemaSources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList",
    },
    text_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsToHclTerraform(struct!.textTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsList",
    },
    timestamp_type_options: {
      value: googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsToHclTerraform(struct!.timestampTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isFilterable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFilterable = this._isFilterable;
    }
    if (this._isMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetadata = this._isMetadata;
    }
    if (this._isRepeatable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRepeatable = this._isRepeatable;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._isSearchable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSearchable = this._isSearchable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retrievalImportance !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalImportance = this._retrievalImportance;
    }
    if (this._dateTimeTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeTypeOptions = this._dateTimeTypeOptions?.internalValue;
    }
    if (this._enumTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumTypeOptions = this._enumTypeOptions?.internalValue;
    }
    if (this._floatTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatTypeOptions = this._floatTypeOptions?.internalValue;
    }
    if (this._integerTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerTypeOptions = this._integerTypeOptions?.internalValue;
    }
    if (this._mapTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTypeOptions = this._mapTypeOptions?.internalValue;
    }
    if (this._propertyTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyTypeOptions = this._propertyTypeOptions?.internalValue;
    }
    if (this._schemaSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaSources = this._schemaSources?.internalValue;
    }
    if (this._textTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTypeOptions = this._textTypeOptions?.internalValue;
    }
    if (this._timestampTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampTypeOptions = this._timestampTypeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._isFilterable = undefined;
      this._isMetadata = undefined;
      this._isRepeatable = undefined;
      this._isRequired = undefined;
      this._isSearchable = undefined;
      this._name = undefined;
      this._retrievalImportance = undefined;
      this._dateTimeTypeOptions.internalValue = undefined;
      this._enumTypeOptions.internalValue = undefined;
      this._floatTypeOptions.internalValue = undefined;
      this._integerTypeOptions.internalValue = undefined;
      this._mapTypeOptions.internalValue = undefined;
      this._propertyTypeOptions.internalValue = undefined;
      this._schemaSources.internalValue = undefined;
      this._textTypeOptions.internalValue = undefined;
      this._timestampTypeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._isFilterable = value.isFilterable;
      this._isMetadata = value.isMetadata;
      this._isRepeatable = value.isRepeatable;
      this._isRequired = value.isRequired;
      this._isSearchable = value.isSearchable;
      this._name = value.name;
      this._retrievalImportance = value.retrievalImportance;
      this._dateTimeTypeOptions.internalValue = value.dateTimeTypeOptions;
      this._enumTypeOptions.internalValue = value.enumTypeOptions;
      this._floatTypeOptions.internalValue = value.floatTypeOptions;
      this._integerTypeOptions.internalValue = value.integerTypeOptions;
      this._mapTypeOptions.internalValue = value.mapTypeOptions;
      this._propertyTypeOptions.internalValue = value.propertyTypeOptions;
      this._schemaSources.internalValue = value.schemaSources;
      this._textTypeOptions.internalValue = value.textTypeOptions;
      this._timestampTypeOptions.internalValue = value.timestampTypeOptions;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_filterable - computed: false, optional: true, required: false
  private _isFilterable?: boolean | cdktf.IResolvable; 
  public get isFilterable() {
    return this.getBooleanAttribute('is_filterable');
  }
  public set isFilterable(value: boolean | cdktf.IResolvable) {
    this._isFilterable = value;
  }
  public resetIsFilterable() {
    this._isFilterable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFilterableInput() {
    return this._isFilterable;
  }

  // is_metadata - computed: false, optional: true, required: false
  private _isMetadata?: boolean | cdktf.IResolvable; 
  public get isMetadata() {
    return this.getBooleanAttribute('is_metadata');
  }
  public set isMetadata(value: boolean | cdktf.IResolvable) {
    this._isMetadata = value;
  }
  public resetIsMetadata() {
    this._isMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetadataInput() {
    return this._isMetadata;
  }

  // is_repeatable - computed: false, optional: true, required: false
  private _isRepeatable?: boolean | cdktf.IResolvable; 
  public get isRepeatable() {
    return this.getBooleanAttribute('is_repeatable');
  }
  public set isRepeatable(value: boolean | cdktf.IResolvable) {
    this._isRepeatable = value;
  }
  public resetIsRepeatable() {
    this._isRepeatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRepeatableInput() {
    return this._isRepeatable;
  }

  // is_required - computed: false, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // is_searchable - computed: false, optional: true, required: false
  private _isSearchable?: boolean | cdktf.IResolvable; 
  public get isSearchable() {
    return this.getBooleanAttribute('is_searchable');
  }
  public set isSearchable(value: boolean | cdktf.IResolvable) {
    this._isSearchable = value;
  }
  public resetIsSearchable() {
    this._isSearchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSearchableInput() {
    return this._isSearchable;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retrieval_importance - computed: false, optional: true, required: false
  private _retrievalImportance?: string; 
  public get retrievalImportance() {
    return this.getStringAttribute('retrieval_importance');
  }
  public set retrievalImportance(value: string) {
    this._retrievalImportance = value;
  }
  public resetRetrievalImportance() {
    this._retrievalImportance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalImportanceInput() {
    return this._retrievalImportance;
  }

  // date_time_type_options - computed: false, optional: true, required: false
  private _dateTimeTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference(this, "date_time_type_options");
  public get dateTimeTypeOptions() {
    return this._dateTimeTypeOptions;
  }
  public putDateTimeTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions) {
    this._dateTimeTypeOptions.internalValue = value;
  }
  public resetDateTimeTypeOptions() {
    this._dateTimeTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeTypeOptionsInput() {
    return this._dateTimeTypeOptions.internalValue;
  }

  // enum_type_options - computed: false, optional: true, required: false
  private _enumTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference(this, "enum_type_options");
  public get enumTypeOptions() {
    return this._enumTypeOptions;
  }
  public putEnumTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions) {
    this._enumTypeOptions.internalValue = value;
  }
  public resetEnumTypeOptions() {
    this._enumTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumTypeOptionsInput() {
    return this._enumTypeOptions.internalValue;
  }

  // float_type_options - computed: false, optional: true, required: false
  private _floatTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference(this, "float_type_options");
  public get floatTypeOptions() {
    return this._floatTypeOptions;
  }
  public putFloatTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions) {
    this._floatTypeOptions.internalValue = value;
  }
  public resetFloatTypeOptions() {
    this._floatTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatTypeOptionsInput() {
    return this._floatTypeOptions.internalValue;
  }

  // integer_type_options - computed: false, optional: true, required: false
  private _integerTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference(this, "integer_type_options");
  public get integerTypeOptions() {
    return this._integerTypeOptions;
  }
  public putIntegerTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions) {
    this._integerTypeOptions.internalValue = value;
  }
  public resetIntegerTypeOptions() {
    this._integerTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerTypeOptionsInput() {
    return this._integerTypeOptions.internalValue;
  }

  // map_type_options - computed: false, optional: true, required: false
  private _mapTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference(this, "map_type_options");
  public get mapTypeOptions() {
    return this._mapTypeOptions;
  }
  public putMapTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions) {
    this._mapTypeOptions.internalValue = value;
  }
  public resetMapTypeOptions() {
    this._mapTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTypeOptionsInput() {
    return this._mapTypeOptions.internalValue;
  }

  // property_type_options - computed: false, optional: true, required: false
  private _propertyTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference(this, "property_type_options");
  public get propertyTypeOptions() {
    return this._propertyTypeOptions;
  }
  public putPropertyTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions) {
    this._propertyTypeOptions.internalValue = value;
  }
  public resetPropertyTypeOptions() {
    this._propertyTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeOptionsInput() {
    return this._propertyTypeOptions.internalValue;
  }

  // schema_sources - computed: false, optional: true, required: false
  private _schemaSources = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList(this, "schema_sources", false);
  public get schemaSources() {
    return this._schemaSources;
  }
  public putSchemaSources(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[] | cdktf.IResolvable) {
    this._schemaSources.internalValue = value;
  }
  public resetSchemaSources() {
    this._schemaSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSourcesInput() {
    return this._schemaSources.internalValue;
  }

  // text_type_options - computed: false, optional: true, required: false
  private _textTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference(this, "text_type_options");
  public get textTypeOptions() {
    return this._textTypeOptions;
  }
  public putTextTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions) {
    this._textTypeOptions.internalValue = value;
  }
  public resetTextTypeOptions() {
    this._textTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTypeOptionsInput() {
    return this._textTypeOptions.internalValue;
  }

  // timestamp_type_options - computed: false, optional: true, required: false
  private _timestampTypeOptions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference(this, "timestamp_type_options");
  public get timestampTypeOptions() {
    return this._timestampTypeOptions;
  }
  public putTimestampTypeOptions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions) {
    this._timestampTypeOptions.internalValue = value;
  }
  public resetTimestampTypeOptions() {
    this._timestampTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTypeOptionsInput() {
    return this._timestampTypeOptions.internalValue;
  }
}

export class GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference {
    return new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDocumentAiWarehouseDocumentSchemaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#create GoogleDocumentAiWarehouseDocumentSchema#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#delete GoogleDocumentAiWarehouseDocumentSchema#delete}
  */
  readonly delete?: string;
}

export function googleDocumentAiWarehouseDocumentSchemaTimeoutsToTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleDocumentAiWarehouseDocumentSchemaTimeoutsToHclTerraform(struct?: GoogleDocumentAiWarehouseDocumentSchemaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDocumentAiWarehouseDocumentSchemaTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDocumentAiWarehouseDocumentSchemaTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema}
*/
export class GoogleDocumentAiWarehouseDocumentSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_document_ai_warehouse_document_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDocumentAiWarehouseDocumentSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDocumentAiWarehouseDocumentSchema to import
  * @param importFromId The id of the existing GoogleDocumentAiWarehouseDocumentSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDocumentAiWarehouseDocumentSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_document_ai_warehouse_document_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDocumentAiWarehouseDocumentSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDocumentAiWarehouseDocumentSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'google_document_ai_warehouse_document_schema',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.25.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._documentIsFolder = config.documentIsFolder;
    this._id = config.id;
    this._location = config.location;
    this._projectNumber = config.projectNumber;
    this._propertyDefinitions.internalValue = config.propertyDefinitions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // document_is_folder - computed: false, optional: true, required: false
  private _documentIsFolder?: boolean | cdktf.IResolvable; 
  public get documentIsFolder() {
    return this.getBooleanAttribute('document_is_folder');
  }
  public set documentIsFolder(value: boolean | cdktf.IResolvable) {
    this._documentIsFolder = value;
  }
  public resetDocumentIsFolder() {
    this._documentIsFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentIsFolderInput() {
    return this._documentIsFolder;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_number - computed: false, optional: false, required: true
  private _projectNumber?: string; 
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }
  public set projectNumber(value: string) {
    this._projectNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumberInput() {
    return this._projectNumber;
  }

  // property_definitions - computed: false, optional: false, required: true
  private _propertyDefinitions = new GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList(this, "property_definitions", false);
  public get propertyDefinitions() {
    return this._propertyDefinitions;
  }
  public putPropertyDefinitions(value: GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitions[] | cdktf.IResolvable) {
    this._propertyDefinitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyDefinitionsInput() {
    return this._propertyDefinitions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDocumentAiWarehouseDocumentSchemaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDocumentAiWarehouseDocumentSchemaTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      document_is_folder: cdktf.booleanToTerraform(this._documentIsFolder),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project_number: cdktf.stringToTerraform(this._projectNumber),
      property_definitions: cdktf.listMapper(googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsToTerraform, true)(this._propertyDefinitions.internalValue),
      timeouts: googleDocumentAiWarehouseDocumentSchemaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_is_folder: {
        value: cdktf.booleanToHclTerraform(this._documentIsFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_number: {
        value: cdktf.stringToHclTerraform(this._projectNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_definitions: {
        value: cdktf.listMapperHcl(googleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsToHclTerraform, true)(this._propertyDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaPropertyDefinitionsList",
      },
      timeouts: {
        value: googleDocumentAiWarehouseDocumentSchemaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDocumentAiWarehouseDocumentSchemaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
