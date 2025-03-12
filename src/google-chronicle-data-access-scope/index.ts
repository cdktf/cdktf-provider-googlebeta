// https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleChronicleDataAccessScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Whether or not the scope allows all labels, allow_all and
  * allowed_data_access_labels are mutually exclusive and one of them must be
  * present. denied_data_access_labels can still be used along with allow_all.
  * When combined with denied_data_access_labels, access will be granted to all
  * data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
  * A customer with scope with denied labels A and B and allow_all will be able
  * to see all data except data labeled with A and data labeled with B and data
  * with labels A and B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#allow_all GoogleChronicleDataAccessScope#allow_all}
  */
  readonly allowAll?: boolean | cdktf.IResolvable;
  /**
  * Required. The user provided scope id which will become the last part of the name
  * of the scope resource.
  * Needs to be compliant with https://google.aip.dev/122
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#data_access_scope_id GoogleChronicleDataAccessScope#data_access_scope_id}
  */
  readonly dataAccessScopeId: string;
  /**
  * Optional. A description of the data access scope for a human reader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#description GoogleChronicleDataAccessScope#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#id GoogleChronicleDataAccessScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique identifier for the Chronicle instance, which is the same as the customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#instance GoogleChronicleDataAccessScope#instance}
  */
  readonly instance: string;
  /**
  * The location of the resource. This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#location GoogleChronicleDataAccessScope#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#project GoogleChronicleDataAccessScope#project}
  */
  readonly project?: string;
  /**
  * allowed_data_access_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#allowed_data_access_labels GoogleChronicleDataAccessScope#allowed_data_access_labels}
  */
  readonly allowedDataAccessLabels?: GoogleChronicleDataAccessScopeAllowedDataAccessLabels[] | cdktf.IResolvable;
  /**
  * denied_data_access_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#denied_data_access_labels GoogleChronicleDataAccessScope#denied_data_access_labels}
  */
  readonly deniedDataAccessLabels?: GoogleChronicleDataAccessScopeDeniedDataAccessLabels[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#timeouts GoogleChronicleDataAccessScope#timeouts}
  */
  readonly timeouts?: GoogleChronicleDataAccessScopeTimeouts;
}
export interface GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel {
  /**
  * Required. The key of the ingestion label. Always required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}
  */
  readonly ingestionLabelKey: string;
  /**
  * Optional. The value of the ingestion label. Optional. An object
  * with no provided value and some key provided would match
  * against the given key and ANY value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}
  */
  readonly ingestionLabelValue?: string;
}

export function googleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelToTerraform(struct?: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference | GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion_label_key: cdktf.stringToTerraform(struct!.ingestionLabelKey),
    ingestion_label_value: cdktf.stringToTerraform(struct!.ingestionLabelValue),
  }
}


export function googleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelToHclTerraform(struct?: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference | GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion_label_key: {
      value: cdktf.stringToHclTerraform(struct!.ingestionLabelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingestion_label_value: {
      value: cdktf.stringToHclTerraform(struct!.ingestionLabelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestionLabelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionLabelKey = this._ingestionLabelKey;
    }
    if (this._ingestionLabelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionLabelValue = this._ingestionLabelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingestionLabelKey = undefined;
      this._ingestionLabelValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingestionLabelKey = value.ingestionLabelKey;
      this._ingestionLabelValue = value.ingestionLabelValue;
    }
  }

  // ingestion_label_key - computed: false, optional: false, required: true
  private _ingestionLabelKey?: string; 
  public get ingestionLabelKey() {
    return this.getStringAttribute('ingestion_label_key');
  }
  public set ingestionLabelKey(value: string) {
    this._ingestionLabelKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionLabelKeyInput() {
    return this._ingestionLabelKey;
  }

  // ingestion_label_value - computed: false, optional: true, required: false
  private _ingestionLabelValue?: string; 
  public get ingestionLabelValue() {
    return this.getStringAttribute('ingestion_label_value');
  }
  public set ingestionLabelValue(value: string) {
    this._ingestionLabelValue = value;
  }
  public resetIngestionLabelValue() {
    this._ingestionLabelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionLabelValueInput() {
    return this._ingestionLabelValue;
  }
}
export interface GoogleChronicleDataAccessScopeAllowedDataAccessLabels {
  /**
  * The asset namespace configured in the forwarder
  * of the customer's events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#asset_namespace GoogleChronicleDataAccessScope#asset_namespace}
  */
  readonly assetNamespace?: string;
  /**
  * The name of the data access label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#data_access_label GoogleChronicleDataAccessScope#data_access_label}
  */
  readonly dataAccessLabel?: string;
  /**
  * The name of the log type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#log_type GoogleChronicleDataAccessScope#log_type}
  */
  readonly logType?: string;
  /**
  * ingestion_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#ingestion_label GoogleChronicleDataAccessScope#ingestion_label}
  */
  readonly ingestionLabel?: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel;
}

export function googleChronicleDataAccessScopeAllowedDataAccessLabelsToTerraform(struct?: GoogleChronicleDataAccessScopeAllowedDataAccessLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_namespace: cdktf.stringToTerraform(struct!.assetNamespace),
    data_access_label: cdktf.stringToTerraform(struct!.dataAccessLabel),
    log_type: cdktf.stringToTerraform(struct!.logType),
    ingestion_label: googleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelToTerraform(struct!.ingestionLabel),
  }
}


export function googleChronicleDataAccessScopeAllowedDataAccessLabelsToHclTerraform(struct?: GoogleChronicleDataAccessScopeAllowedDataAccessLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_namespace: {
      value: cdktf.stringToHclTerraform(struct!.assetNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_access_label: {
      value: cdktf.stringToHclTerraform(struct!.dataAccessLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingestion_label: {
      value: googleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelToHclTerraform(struct!.ingestionLabel),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleDataAccessScopeAllowedDataAccessLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetNamespace = this._assetNamespace;
    }
    if (this._dataAccessLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessLabel = this._dataAccessLabel;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._ingestionLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionLabel = this._ingestionLabel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDataAccessScopeAllowedDataAccessLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetNamespace = undefined;
      this._dataAccessLabel = undefined;
      this._logType = undefined;
      this._ingestionLabel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetNamespace = value.assetNamespace;
      this._dataAccessLabel = value.dataAccessLabel;
      this._logType = value.logType;
      this._ingestionLabel.internalValue = value.ingestionLabel;
    }
  }

  // asset_namespace - computed: false, optional: true, required: false
  private _assetNamespace?: string; 
  public get assetNamespace() {
    return this.getStringAttribute('asset_namespace');
  }
  public set assetNamespace(value: string) {
    this._assetNamespace = value;
  }
  public resetAssetNamespace() {
    this._assetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNamespaceInput() {
    return this._assetNamespace;
  }

  // data_access_label - computed: false, optional: true, required: false
  private _dataAccessLabel?: string; 
  public get dataAccessLabel() {
    return this.getStringAttribute('data_access_label');
  }
  public set dataAccessLabel(value: string) {
    this._dataAccessLabel = value;
  }
  public resetDataAccessLabel() {
    this._dataAccessLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessLabelInput() {
    return this._dataAccessLabel;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // ingestion_label - computed: false, optional: true, required: false
  private _ingestionLabel = new GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference(this, "ingestion_label");
  public get ingestionLabel() {
    return this._ingestionLabel;
  }
  public putIngestionLabel(value: GoogleChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel) {
    this._ingestionLabel.internalValue = value;
  }
  public resetIngestionLabel() {
    this._ingestionLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionLabelInput() {
    return this._ingestionLabel.internalValue;
  }
}

export class GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleDataAccessScopeAllowedDataAccessLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference {
    return new GoogleChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel {
  /**
  * Required. The key of the ingestion label. Always required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_key GoogleChronicleDataAccessScope#ingestion_label_key}
  */
  readonly ingestionLabelKey: string;
  /**
  * Optional. The value of the ingestion label. Optional. An object
  * with no provided value and some key provided would match
  * against the given key and ANY value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#ingestion_label_value GoogleChronicleDataAccessScope#ingestion_label_value}
  */
  readonly ingestionLabelValue?: string;
}

export function googleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelToTerraform(struct?: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference | GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion_label_key: cdktf.stringToTerraform(struct!.ingestionLabelKey),
    ingestion_label_value: cdktf.stringToTerraform(struct!.ingestionLabelValue),
  }
}


export function googleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelToHclTerraform(struct?: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference | GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion_label_key: {
      value: cdktf.stringToHclTerraform(struct!.ingestionLabelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingestion_label_value: {
      value: cdktf.stringToHclTerraform(struct!.ingestionLabelValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestionLabelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionLabelKey = this._ingestionLabelKey;
    }
    if (this._ingestionLabelValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionLabelValue = this._ingestionLabelValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingestionLabelKey = undefined;
      this._ingestionLabelValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingestionLabelKey = value.ingestionLabelKey;
      this._ingestionLabelValue = value.ingestionLabelValue;
    }
  }

  // ingestion_label_key - computed: false, optional: false, required: true
  private _ingestionLabelKey?: string; 
  public get ingestionLabelKey() {
    return this.getStringAttribute('ingestion_label_key');
  }
  public set ingestionLabelKey(value: string) {
    this._ingestionLabelKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionLabelKeyInput() {
    return this._ingestionLabelKey;
  }

  // ingestion_label_value - computed: false, optional: true, required: false
  private _ingestionLabelValue?: string; 
  public get ingestionLabelValue() {
    return this.getStringAttribute('ingestion_label_value');
  }
  public set ingestionLabelValue(value: string) {
    this._ingestionLabelValue = value;
  }
  public resetIngestionLabelValue() {
    this._ingestionLabelValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionLabelValueInput() {
    return this._ingestionLabelValue;
  }
}
export interface GoogleChronicleDataAccessScopeDeniedDataAccessLabels {
  /**
  * The asset namespace configured in the forwarder
  * of the customer's events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#asset_namespace GoogleChronicleDataAccessScope#asset_namespace}
  */
  readonly assetNamespace?: string;
  /**
  * The name of the data access label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#data_access_label GoogleChronicleDataAccessScope#data_access_label}
  */
  readonly dataAccessLabel?: string;
  /**
  * The name of the log type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#log_type GoogleChronicleDataAccessScope#log_type}
  */
  readonly logType?: string;
  /**
  * ingestion_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#ingestion_label GoogleChronicleDataAccessScope#ingestion_label}
  */
  readonly ingestionLabel?: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel;
}

export function googleChronicleDataAccessScopeDeniedDataAccessLabelsToTerraform(struct?: GoogleChronicleDataAccessScopeDeniedDataAccessLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_namespace: cdktf.stringToTerraform(struct!.assetNamespace),
    data_access_label: cdktf.stringToTerraform(struct!.dataAccessLabel),
    log_type: cdktf.stringToTerraform(struct!.logType),
    ingestion_label: googleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelToTerraform(struct!.ingestionLabel),
  }
}


export function googleChronicleDataAccessScopeDeniedDataAccessLabelsToHclTerraform(struct?: GoogleChronicleDataAccessScopeDeniedDataAccessLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_namespace: {
      value: cdktf.stringToHclTerraform(struct!.assetNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_access_label: {
      value: cdktf.stringToHclTerraform(struct!.dataAccessLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingestion_label: {
      value: googleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelToHclTerraform(struct!.ingestionLabel),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleChronicleDataAccessScopeDeniedDataAccessLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetNamespace = this._assetNamespace;
    }
    if (this._dataAccessLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessLabel = this._dataAccessLabel;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._ingestionLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionLabel = this._ingestionLabel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDataAccessScopeDeniedDataAccessLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assetNamespace = undefined;
      this._dataAccessLabel = undefined;
      this._logType = undefined;
      this._ingestionLabel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assetNamespace = value.assetNamespace;
      this._dataAccessLabel = value.dataAccessLabel;
      this._logType = value.logType;
      this._ingestionLabel.internalValue = value.ingestionLabel;
    }
  }

  // asset_namespace - computed: false, optional: true, required: false
  private _assetNamespace?: string; 
  public get assetNamespace() {
    return this.getStringAttribute('asset_namespace');
  }
  public set assetNamespace(value: string) {
    this._assetNamespace = value;
  }
  public resetAssetNamespace() {
    this._assetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetNamespaceInput() {
    return this._assetNamespace;
  }

  // data_access_label - computed: false, optional: true, required: false
  private _dataAccessLabel?: string; 
  public get dataAccessLabel() {
    return this.getStringAttribute('data_access_label');
  }
  public set dataAccessLabel(value: string) {
    this._dataAccessLabel = value;
  }
  public resetDataAccessLabel() {
    this._dataAccessLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessLabelInput() {
    return this._dataAccessLabel;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // ingestion_label - computed: false, optional: true, required: false
  private _ingestionLabel = new GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference(this, "ingestion_label");
  public get ingestionLabel() {
    return this._ingestionLabel;
  }
  public putIngestionLabel(value: GoogleChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel) {
    this._ingestionLabel.internalValue = value;
  }
  public resetIngestionLabel() {
    this._ingestionLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionLabelInput() {
    return this._ingestionLabel.internalValue;
  }
}

export class GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList extends cdktf.ComplexList {
  public internalValue? : GoogleChronicleDataAccessScopeDeniedDataAccessLabels[] | cdktf.IResolvable

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
  public get(index: number): GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference {
    return new GoogleChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleChronicleDataAccessScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#create GoogleChronicleDataAccessScope#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#delete GoogleChronicleDataAccessScope#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#update GoogleChronicleDataAccessScope#update}
  */
  readonly update?: string;
}

export function googleChronicleDataAccessScopeTimeoutsToTerraform(struct?: GoogleChronicleDataAccessScopeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleChronicleDataAccessScopeTimeoutsToHclTerraform(struct?: GoogleChronicleDataAccessScopeTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleChronicleDataAccessScopeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleChronicleDataAccessScopeTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleChronicleDataAccessScopeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope google_chronicle_data_access_scope}
*/
export class GoogleChronicleDataAccessScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_chronicle_data_access_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleChronicleDataAccessScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleChronicleDataAccessScope to import
  * @param importFromId The id of the existing GoogleChronicleDataAccessScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleChronicleDataAccessScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_chronicle_data_access_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_data_access_scope google_chronicle_data_access_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleChronicleDataAccessScopeConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleChronicleDataAccessScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_chronicle_data_access_scope',
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
    this._allowAll = config.allowAll;
    this._dataAccessScopeId = config.dataAccessScopeId;
    this._description = config.description;
    this._id = config.id;
    this._instance = config.instance;
    this._location = config.location;
    this._project = config.project;
    this._allowedDataAccessLabels.internalValue = config.allowedDataAccessLabels;
    this._deniedDataAccessLabels.internalValue = config.deniedDataAccessLabels;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all - computed: false, optional: true, required: false
  private _allowAll?: boolean | cdktf.IResolvable; 
  public get allowAll() {
    return this.getBooleanAttribute('allow_all');
  }
  public set allowAll(value: boolean | cdktf.IResolvable) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_access_scope_id - computed: false, optional: false, required: true
  private _dataAccessScopeId?: string; 
  public get dataAccessScopeId() {
    return this.getStringAttribute('data_access_scope_id');
  }
  public set dataAccessScopeId(value: string) {
    this._dataAccessScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessScopeIdInput() {
    return this._dataAccessScopeId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // last_editor - computed: true, optional: false, required: false
  public get lastEditor() {
    return this.getStringAttribute('last_editor');
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

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // allowed_data_access_labels - computed: false, optional: true, required: false
  private _allowedDataAccessLabels = new GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList(this, "allowed_data_access_labels", false);
  public get allowedDataAccessLabels() {
    return this._allowedDataAccessLabels;
  }
  public putAllowedDataAccessLabels(value: GoogleChronicleDataAccessScopeAllowedDataAccessLabels[] | cdktf.IResolvable) {
    this._allowedDataAccessLabels.internalValue = value;
  }
  public resetAllowedDataAccessLabels() {
    this._allowedDataAccessLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDataAccessLabelsInput() {
    return this._allowedDataAccessLabels.internalValue;
  }

  // denied_data_access_labels - computed: false, optional: true, required: false
  private _deniedDataAccessLabels = new GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList(this, "denied_data_access_labels", false);
  public get deniedDataAccessLabels() {
    return this._deniedDataAccessLabels;
  }
  public putDeniedDataAccessLabels(value: GoogleChronicleDataAccessScopeDeniedDataAccessLabels[] | cdktf.IResolvable) {
    this._deniedDataAccessLabels.internalValue = value;
  }
  public resetDeniedDataAccessLabels() {
    this._deniedDataAccessLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedDataAccessLabelsInput() {
    return this._deniedDataAccessLabels.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleChronicleDataAccessScopeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleChronicleDataAccessScopeTimeouts) {
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
      allow_all: cdktf.booleanToTerraform(this._allowAll),
      data_access_scope_id: cdktf.stringToTerraform(this._dataAccessScopeId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      allowed_data_access_labels: cdktf.listMapper(googleChronicleDataAccessScopeAllowedDataAccessLabelsToTerraform, true)(this._allowedDataAccessLabels.internalValue),
      denied_data_access_labels: cdktf.listMapper(googleChronicleDataAccessScopeDeniedDataAccessLabelsToTerraform, true)(this._deniedDataAccessLabels.internalValue),
      timeouts: googleChronicleDataAccessScopeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_all: {
        value: cdktf.booleanToHclTerraform(this._allowAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_access_scope_id: {
        value: cdktf.stringToHclTerraform(this._dataAccessScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_data_access_labels: {
        value: cdktf.listMapperHcl(googleChronicleDataAccessScopeAllowedDataAccessLabelsToHclTerraform, true)(this._allowedDataAccessLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleDataAccessScopeAllowedDataAccessLabelsList",
      },
      denied_data_access_labels: {
        value: cdktf.listMapperHcl(googleChronicleDataAccessScopeDeniedDataAccessLabelsToHclTerraform, true)(this._deniedDataAccessLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleChronicleDataAccessScopeDeniedDataAccessLabelsList",
      },
      timeouts: {
        value: googleChronicleDataAccessScopeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleChronicleDataAccessScopeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
