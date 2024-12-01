// https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataLossPreventionDiscoveryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display Name (max 1000 Chars)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#display_name GoogleDataLossPreventionDiscoveryConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#id GoogleDataLossPreventionDiscoveryConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Detection logic for profile generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#inspect_templates GoogleDataLossPreventionDiscoveryConfig#inspect_templates}
  */
  readonly inspectTemplates?: string[];
  /**
  * Location to create the discovery config in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#location GoogleDataLossPreventionDiscoveryConfig#location}
  */
  readonly location: string;
  /**
  * The parent of the discovery config in any of the following formats:
  * 
  * * 'projects/{{project}}/locations/{{location}}'
  * * 'organizations/{{organization_id}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#parent GoogleDataLossPreventionDiscoveryConfig#parent}
  */
  readonly parent: string;
  /**
  * Required. A status for this configuration Possible values: ["RUNNING", "PAUSED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#status GoogleDataLossPreventionDiscoveryConfig#status}
  */
  readonly status?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#actions GoogleDataLossPreventionDiscoveryConfig#actions}
  */
  readonly actions?: GoogleDataLossPreventionDiscoveryConfigActions[] | cdktf.IResolvable;
  /**
  * org_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#org_config GoogleDataLossPreventionDiscoveryConfig#org_config}
  */
  readonly orgConfig?: GoogleDataLossPreventionDiscoveryConfigOrgConfig;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#targets GoogleDataLossPreventionDiscoveryConfig#targets}
  */
  readonly targets?: GoogleDataLossPreventionDiscoveryConfigTargets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#timeouts GoogleDataLossPreventionDiscoveryConfig#timeouts}
  */
  readonly timeouts?: GoogleDataLossPreventionDiscoveryConfigTimeouts;
}
export interface GoogleDataLossPreventionDiscoveryConfigErrorsDetails {
}

export function googleDataLossPreventionDiscoveryConfigErrorsDetailsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigErrorsDetailsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigErrorsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigErrorsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigErrorsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigErrorsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigErrors {
}

export function googleDataLossPreventionDiscoveryConfigErrorsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigErrorsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new GoogleDataLossPreventionDiscoveryConfigErrorsDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class GoogleDataLossPreventionDiscoveryConfigErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable {
  /**
  * Dataset Id of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#dataset_id GoogleDataLossPreventionDiscoveryConfig#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table. If omitted, the project ID is inferred from the API call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#project_id GoogleDataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#table_id GoogleDataLossPreventionDiscoveryConfig#table_id}
  */
  readonly tableId?: string;
}

export function googleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: true, required: false
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  public resetTableId() {
    this._tableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsExportData {
  /**
  * profile_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#profile_table GoogleDataLossPreventionDiscoveryConfig#profile_table}
  */
  readonly profileTable?: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable;
}

export function googleDataLossPreventionDiscoveryConfigActionsExportDataToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsExportData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_table: googleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableToTerraform(struct!.profileTable),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsExportDataToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsExportData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_table: {
      value: googleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableToHclTerraform(struct!.profileTable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsExportData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileTable = this._profileTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsExportData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._profileTable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._profileTable.internalValue = value.profileTable;
    }
  }

  // profile_table - computed: false, optional: true, required: false
  private _profileTable = new GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTableOutputReference(this, "profile_table");
  public get profileTable() {
    return this._profileTable;
  }
  public putProfileTable(value: GoogleDataLossPreventionDiscoveryConfigActionsExportDataProfileTable) {
    this._profileTable.internalValue = value;
  }
  public resetProfileTable() {
    this._profileTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTableInput() {
    return this._profileTable.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions {
  /**
  * The minimum data risk score that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#minimum_risk_score GoogleDataLossPreventionDiscoveryConfig#minimum_risk_score}
  */
  readonly minimumRiskScore?: string;
  /**
  * The minimum sensitivity level that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#minimum_sensitivity_score GoogleDataLossPreventionDiscoveryConfig#minimum_sensitivity_score}
  */
  readonly minimumSensitivityScore?: string;
}

export function googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_risk_score: cdktf.stringToTerraform(struct!.minimumRiskScore),
    minimum_sensitivity_score: cdktf.stringToTerraform(struct!.minimumSensitivityScore),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_risk_score: {
      value: cdktf.stringToHclTerraform(struct!.minimumRiskScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_sensitivity_score: {
      value: cdktf.stringToHclTerraform(struct!.minimumSensitivityScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumRiskScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumRiskScore = this._minimumRiskScore;
    }
    if (this._minimumSensitivityScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSensitivityScore = this._minimumSensitivityScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumRiskScore = undefined;
      this._minimumSensitivityScore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumRiskScore = value.minimumRiskScore;
      this._minimumSensitivityScore = value.minimumSensitivityScore;
    }
  }

  // minimum_risk_score - computed: false, optional: true, required: false
  private _minimumRiskScore?: string; 
  public get minimumRiskScore() {
    return this.getStringAttribute('minimum_risk_score');
  }
  public set minimumRiskScore(value: string) {
    this._minimumRiskScore = value;
  }
  public resetMinimumRiskScore() {
    this._minimumRiskScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRiskScoreInput() {
    return this._minimumRiskScore;
  }

  // minimum_sensitivity_score - computed: false, optional: true, required: false
  private _minimumSensitivityScore?: string; 
  public get minimumSensitivityScore() {
    return this.getStringAttribute('minimum_sensitivity_score');
  }
  public set minimumSensitivityScore(value: string) {
    this._minimumSensitivityScore = value;
  }
  public resetMinimumSensitivityScore() {
    this._minimumSensitivityScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSensitivityScoreInput() {
    return this._minimumSensitivityScore;
  }
}

export class GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions {
  /**
  * The operator to apply to the collection of conditions Possible values: ["OR", "AND"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#logical_operator GoogleDataLossPreventionDiscoveryConfig#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#conditions GoogleDataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_operator: cdktf.stringToTerraform(struct!.logicalOperator),
    conditions: cdktf.listMapper(googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_operator: {
      value: cdktf.stringToHclTerraform(struct!.logicalOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalOperator = this._logicalOperator;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logicalOperator = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logicalOperator = value.logicalOperator;
      this._conditions.internalValue = value.conditions;
    }
  }

  // logical_operator - computed: false, optional: true, required: false
  private _logicalOperator?: string; 
  public get logicalOperator() {
    return this.getStringAttribute('logical_operator');
  }
  public set logicalOperator(value: string) {
    this._logicalOperator = value;
  }
  public resetLogicalOperator() {
    this._logicalOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalOperatorInput() {
    return this._logicalOperator;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition {
  /**
  * expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#expressions GoogleDataLossPreventionDiscoveryConfig#expressions}
  */
  readonly expressions?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions;
}

export function googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsToTerraform(struct!.expressions),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsToHclTerraform(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions.internalValue = value.expressions;
    }
  }

  // expressions - computed: false, optional: true, required: false
  private _expressions = new GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressionsOutputReference(this, "expressions");
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionExpressions) {
    this._expressions.internalValue = value;
  }
  public resetExpressions() {
    this._expressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification {
  /**
  * How much data to include in the pub/sub message. Possible values: ["TABLE_PROFILE", "RESOURCE_NAME"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#detail_of_message GoogleDataLossPreventionDiscoveryConfig#detail_of_message}
  */
  readonly detailOfMessage?: string;
  /**
  * The type of event that triggers a Pub/Sub. At most one PubSubNotification per EventType is permitted. Possible values: ["NEW_PROFILE", "CHANGED_PROFILE", "SCORE_INCREASED", "ERROR_CHANGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#event GoogleDataLossPreventionDiscoveryConfig#event}
  */
  readonly event?: string;
  /**
  * Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#topic GoogleDataLossPreventionDiscoveryConfig#topic}
  */
  readonly topic?: string;
  /**
  * pubsub_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#pubsub_condition GoogleDataLossPreventionDiscoveryConfig#pubsub_condition}
  */
  readonly pubsubCondition?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition;
}

export function googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detail_of_message: cdktf.stringToTerraform(struct!.detailOfMessage),
    event: cdktf.stringToTerraform(struct!.event),
    topic: cdktf.stringToTerraform(struct!.topic),
    pubsub_condition: googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionToTerraform(struct!.pubsubCondition),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detail_of_message: {
      value: cdktf.stringToHclTerraform(struct!.detailOfMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pubsub_condition: {
      value: googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionToHclTerraform(struct!.pubsubCondition),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailOfMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailOfMessage = this._detailOfMessage;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._pubsubCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubCondition = this._pubsubCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detailOfMessage = undefined;
      this._event = undefined;
      this._topic = undefined;
      this._pubsubCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detailOfMessage = value.detailOfMessage;
      this._event = value.event;
      this._topic = value.topic;
      this._pubsubCondition.internalValue = value.pubsubCondition;
    }
  }

  // detail_of_message - computed: false, optional: true, required: false
  private _detailOfMessage?: string; 
  public get detailOfMessage() {
    return this.getStringAttribute('detail_of_message');
  }
  public set detailOfMessage(value: string) {
    this._detailOfMessage = value;
  }
  public resetDetailOfMessage() {
    this._detailOfMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailOfMessageInput() {
    return this._detailOfMessage;
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // pubsub_condition - computed: false, optional: true, required: false
  private _pubsubCondition = new GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubConditionOutputReference(this, "pubsub_condition");
  public get pubsubCondition() {
    return this._pubsubCondition;
  }
  public putPubsubCondition(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationPubsubCondition) {
    this._pubsubCondition.internalValue = value;
  }
  public resetPubsubCondition() {
    this._pubsubCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubConditionInput() {
    return this._pubsubCondition.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#score GoogleDataLossPreventionDiscoveryConfig#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag {
  /**
  * The namespaced name for the tag value to attach to resources. Must be in the format '{parent_id}/{tag_key_short_name}/{short_name}', for example, "123456/environment/prod".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#namespaced_value GoogleDataLossPreventionDiscoveryConfig#namespaced_value}
  */
  readonly namespacedValue?: string;
}

export function googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaced_value: cdktf.stringToTerraform(struct!.namespacedValue),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaced_value: {
      value: cdktf.stringToHclTerraform(struct!.namespacedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespacedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedValue = this._namespacedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespacedValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespacedValue = value.namespacedValue;
    }
  }

  // namespaced_value - computed: false, optional: true, required: false
  private _namespacedValue?: string; 
  public get namespacedValue() {
    return this.getStringAttribute('namespaced_value');
  }
  public set namespacedValue(value: string) {
    this._namespacedValue = value;
  }
  public resetNamespacedValue() {
    this._namespacedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedValueInput() {
    return this._namespacedValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions {
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#sensitivity_score GoogleDataLossPreventionDiscoveryConfig#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#tag GoogleDataLossPreventionDiscoveryConfig#tag}
  */
  readonly tag?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag;
}

export function googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitivity_score: googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreToTerraform(struct!.sensitivityScore),
    tag: googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagToTerraform(struct!.tag),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitivity_score: {
      value: googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreList",
    },
    tag: {
      value: googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sensitivityScore.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sensitivityScore.internalValue = value.sensitivityScore;
      this._tag.internalValue = value.tag;
    }
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActionsTagResources {
  /**
  * Whether applying a tag to a resource should lower the risk of the profile for that resource. For example, in conjunction with an [IAM deny policy](https://cloud.google.com/iam/docs/deny-overview), you can deny all principals a permission if a tag value is present, mitigating the risk of the resource. This also lowers the data risk of resources at the lower levels of the resource hierarchy. For example, reducing the data risk of a table data profile also reduces the data risk of the constituent column data profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#lower_data_risk_to_low GoogleDataLossPreventionDiscoveryConfig#lower_data_risk_to_low}
  */
  readonly lowerDataRiskToLow?: boolean | cdktf.IResolvable;
  /**
  * The profile generations for which the tag should be attached to resources. If you attach a tag to only new profiles, then if the sensitivity score of a profile subsequently changes, its tag doesn't change. By default, this field includes only new profiles. To include both new and updated profiles for tagging, this field should explicitly include both 'PROFILE_GENERATION_NEW' and 'PROFILE_GENERATION_UPDATE'. Possible values: ["PROFILE_GENERATION_NEW", "PROFILE_GENERATION_UPDATE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#profile_generations_to_tag GoogleDataLossPreventionDiscoveryConfig#profile_generations_to_tag}
  */
  readonly profileGenerationsToTag?: string[];
  /**
  * tag_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#tag_conditions GoogleDataLossPreventionDiscoveryConfig#tag_conditions}
  */
  readonly tagConditions?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDiscoveryConfigActionsTagResourcesToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsTagResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower_data_risk_to_low: cdktf.booleanToTerraform(struct!.lowerDataRiskToLow),
    profile_generations_to_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileGenerationsToTag),
    tag_conditions: cdktf.listMapper(googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsToTerraform, true)(struct!.tagConditions),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsTagResourcesToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesOutputReference | GoogleDataLossPreventionDiscoveryConfigActionsTagResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower_data_risk_to_low: {
      value: cdktf.booleanToHclTerraform(struct!.lowerDataRiskToLow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile_generations_to_tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profileGenerationsToTag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_conditions: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsToHclTerraform, true)(struct!.tagConditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActionsTagResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerDataRiskToLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerDataRiskToLow = this._lowerDataRiskToLow;
    }
    if (this._profileGenerationsToTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileGenerationsToTag = this._profileGenerationsToTag;
    }
    if (this._tagConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagConditions = this._tagConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActionsTagResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lowerDataRiskToLow = undefined;
      this._profileGenerationsToTag = undefined;
      this._tagConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lowerDataRiskToLow = value.lowerDataRiskToLow;
      this._profileGenerationsToTag = value.profileGenerationsToTag;
      this._tagConditions.internalValue = value.tagConditions;
    }
  }

  // lower_data_risk_to_low - computed: false, optional: true, required: false
  private _lowerDataRiskToLow?: boolean | cdktf.IResolvable; 
  public get lowerDataRiskToLow() {
    return this.getBooleanAttribute('lower_data_risk_to_low');
  }
  public set lowerDataRiskToLow(value: boolean | cdktf.IResolvable) {
    this._lowerDataRiskToLow = value;
  }
  public resetLowerDataRiskToLow() {
    this._lowerDataRiskToLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerDataRiskToLowInput() {
    return this._lowerDataRiskToLow;
  }

  // profile_generations_to_tag - computed: false, optional: true, required: false
  private _profileGenerationsToTag?: string[]; 
  public get profileGenerationsToTag() {
    return this.getListAttribute('profile_generations_to_tag');
  }
  public set profileGenerationsToTag(value: string[]) {
    this._profileGenerationsToTag = value;
  }
  public resetProfileGenerationsToTag() {
    this._profileGenerationsToTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileGenerationsToTagInput() {
    return this._profileGenerationsToTag;
  }

  // tag_conditions - computed: false, optional: true, required: false
  private _tagConditions = new GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditionsList(this, "tag_conditions", false);
  public get tagConditions() {
    return this._tagConditions;
  }
  public putTagConditions(value: GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesTagConditions[] | cdktf.IResolvable) {
    this._tagConditions.internalValue = value;
  }
  public resetTagConditions() {
    this._tagConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagConditionsInput() {
    return this._tagConditions.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigActions {
  /**
  * export_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#export_data GoogleDataLossPreventionDiscoveryConfig#export_data}
  */
  readonly exportData?: GoogleDataLossPreventionDiscoveryConfigActionsExportData;
  /**
  * pub_sub_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#pub_sub_notification GoogleDataLossPreventionDiscoveryConfig#pub_sub_notification}
  */
  readonly pubSubNotification?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification;
  /**
  * tag_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#tag_resources GoogleDataLossPreventionDiscoveryConfig#tag_resources}
  */
  readonly tagResources?: GoogleDataLossPreventionDiscoveryConfigActionsTagResources;
}

export function googleDataLossPreventionDiscoveryConfigActionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_data: googleDataLossPreventionDiscoveryConfigActionsExportDataToTerraform(struct!.exportData),
    pub_sub_notification: googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationToTerraform(struct!.pubSubNotification),
    tag_resources: googleDataLossPreventionDiscoveryConfigActionsTagResourcesToTerraform(struct!.tagResources),
  }
}


export function googleDataLossPreventionDiscoveryConfigActionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_data: {
      value: googleDataLossPreventionDiscoveryConfigActionsExportDataToHclTerraform(struct!.exportData),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsExportDataList",
    },
    pub_sub_notification: {
      value: googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationToHclTerraform(struct!.pubSubNotification),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationList",
    },
    tag_resources: {
      value: googleDataLossPreventionDiscoveryConfigActionsTagResourcesToHclTerraform(struct!.tagResources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportData = this._exportData?.internalValue;
    }
    if (this._pubSubNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubSubNotification = this._pubSubNotification?.internalValue;
    }
    if (this._tagResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagResources = this._tagResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportData.internalValue = undefined;
      this._pubSubNotification.internalValue = undefined;
      this._tagResources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportData.internalValue = value.exportData;
      this._pubSubNotification.internalValue = value.pubSubNotification;
      this._tagResources.internalValue = value.tagResources;
    }
  }

  // export_data - computed: false, optional: true, required: false
  private _exportData = new GoogleDataLossPreventionDiscoveryConfigActionsExportDataOutputReference(this, "export_data");
  public get exportData() {
    return this._exportData;
  }
  public putExportData(value: GoogleDataLossPreventionDiscoveryConfigActionsExportData) {
    this._exportData.internalValue = value;
  }
  public resetExportData() {
    this._exportData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDataInput() {
    return this._exportData.internalValue;
  }

  // pub_sub_notification - computed: false, optional: true, required: false
  private _pubSubNotification = new GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotificationOutputReference(this, "pub_sub_notification");
  public get pubSubNotification() {
    return this._pubSubNotification;
  }
  public putPubSubNotification(value: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification) {
    this._pubSubNotification.internalValue = value;
  }
  public resetPubSubNotification() {
    this._pubSubNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubSubNotificationInput() {
    return this._pubSubNotification.internalValue;
  }

  // tag_resources - computed: false, optional: true, required: false
  private _tagResources = new GoogleDataLossPreventionDiscoveryConfigActionsTagResourcesOutputReference(this, "tag_resources");
  public get tagResources() {
    return this._tagResources;
  }
  public putTagResources(value: GoogleDataLossPreventionDiscoveryConfigActionsTagResources) {
    this._tagResources.internalValue = value;
  }
  public resetTagResources() {
    this._tagResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagResourcesInput() {
    return this._tagResources.internalValue;
  }
}

export class GoogleDataLossPreventionDiscoveryConfigActionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDiscoveryConfigActions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigActionsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation {
  /**
  * The ID for the folder within an organization to scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#folder_id GoogleDataLossPreventionDiscoveryConfig#folder_id}
  */
  readonly folderId?: string;
  /**
  * The ID of an organization to scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#organization_id GoogleDataLossPreventionDiscoveryConfig#organization_id}
  */
  readonly organizationId?: string;
}

export function googleDataLossPreventionDiscoveryConfigOrgConfigLocationToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference | GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
  }
}


export function googleDataLossPreventionDiscoveryConfigOrgConfigLocationToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference | GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._folderId = undefined;
      this._organizationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._folderId = value.folderId;
      this._organizationId = value.organizationId;
    }
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigOrgConfig {
  /**
  * The project that will run the scan. The DLP service account that exists within this project must have access to all resources that are profiled, and the cloud DLP API must be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#project_id GoogleDataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#location GoogleDataLossPreventionDiscoveryConfig#location}
  */
  readonly location?: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation;
}

export function googleDataLossPreventionDiscoveryConfigOrgConfigToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference | GoogleDataLossPreventionDiscoveryConfigOrgConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    location: googleDataLossPreventionDiscoveryConfigOrgConfigLocationToTerraform(struct!.location),
  }
}


export function googleDataLossPreventionDiscoveryConfigOrgConfigToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference | GoogleDataLossPreventionDiscoveryConfigOrgConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: googleDataLossPreventionDiscoveryConfigOrgConfigLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigOrgConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigOrgConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._location.internalValue = value.location;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // location - computed: false, optional: true, required: false
  private _location = new GoogleDataLossPreventionDiscoveryConfigOrgConfigLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: GoogleDataLossPreventionDiscoveryConfigOrgConfigLocation) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence {
  /**
  * How frequently data profiles can be updated when the template is modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence {
  /**
  * How frequently profiles may be updated when schemas are modified. Default to monthly Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
  /**
  * The type of events to consider when deciding if the table's schema has been modified and should have the profile updated. Defaults to NEW_COLUMN. Possible values: ["SCHEMA_NEW_COLUMNS", "SCHEMA_REMOVED_COLUMNS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._types = value.types;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence {
  /**
  * How frequently data profiles can be updated when tables are modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
  /**
  * The type of events to consider when deciding if the table has been modified and should have the profile updated. Defaults to MODIFIED_TIMESTAMP Possible values: ["TABLE_MODIFIED_TIMESTAMP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._types = value.types;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence {
  /**
  * inspect_template_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#inspect_template_modified_cadence GoogleDataLossPreventionDiscoveryConfig#inspect_template_modified_cadence}
  */
  readonly inspectTemplateModifiedCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence;
  /**
  * schema_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#schema_modified_cadence GoogleDataLossPreventionDiscoveryConfig#schema_modified_cadence}
  */
  readonly schemaModifiedCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence;
  /**
  * table_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#table_modified_cadence GoogleDataLossPreventionDiscoveryConfig#table_modified_cadence}
  */
  readonly tableModifiedCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_template_modified_cadence: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceToTerraform(struct!.inspectTemplateModifiedCadence),
    schema_modified_cadence: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceToTerraform(struct!.schemaModifiedCadence),
    table_modified_cadence: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceToTerraform(struct!.tableModifiedCadence),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_template_modified_cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceToHclTerraform(struct!.inspectTemplateModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceList",
    },
    schema_modified_cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceToHclTerraform(struct!.schemaModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceList",
    },
    table_modified_cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceToHclTerraform(struct!.tableModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectTemplateModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplateModifiedCadence = this._inspectTemplateModifiedCadence?.internalValue;
    }
    if (this._schemaModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaModifiedCadence = this._schemaModifiedCadence?.internalValue;
    }
    if (this._tableModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableModifiedCadence = this._tableModifiedCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectTemplateModifiedCadence.internalValue = undefined;
      this._schemaModifiedCadence.internalValue = undefined;
      this._tableModifiedCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectTemplateModifiedCadence.internalValue = value.inspectTemplateModifiedCadence;
      this._schemaModifiedCadence.internalValue = value.schemaModifiedCadence;
      this._tableModifiedCadence.internalValue = value.tableModifiedCadence;
    }
  }

  // inspect_template_modified_cadence - computed: false, optional: true, required: false
  private _inspectTemplateModifiedCadence = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadenceOutputReference(this, "inspect_template_modified_cadence");
  public get inspectTemplateModifiedCadence() {
    return this._inspectTemplateModifiedCadence;
  }
  public putInspectTemplateModifiedCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceInspectTemplateModifiedCadence) {
    this._inspectTemplateModifiedCadence.internalValue = value;
  }
  public resetInspectTemplateModifiedCadence() {
    this._inspectTemplateModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateModifiedCadenceInput() {
    return this._inspectTemplateModifiedCadence.internalValue;
  }

  // schema_modified_cadence - computed: false, optional: true, required: false
  private _schemaModifiedCadence = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadenceOutputReference(this, "schema_modified_cadence");
  public get schemaModifiedCadence() {
    return this._schemaModifiedCadence;
  }
  public putSchemaModifiedCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence) {
    this._schemaModifiedCadence.internalValue = value;
  }
  public resetSchemaModifiedCadence() {
    this._schemaModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaModifiedCadenceInput() {
    return this._schemaModifiedCadence.internalValue;
  }

  // table_modified_cadence - computed: false, optional: true, required: false
  private _tableModifiedCadence = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadenceOutputReference(this, "table_modified_cadence");
  public get tableModifiedCadence() {
    return this._tableModifiedCadence;
  }
  public putTableModifiedCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence) {
    this._tableModifiedCadence.internalValue = value;
  }
  public resetTableModifiedCadence() {
    this._tableModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableModifiedCadenceInput() {
    return this._tableModifiedCadence.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions {
  /**
  * Duration format. The minimum age a table must have before Cloud DLP can profile it. Value greater than 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#min_age GoogleDataLossPreventionDiscoveryConfig#min_age}
  */
  readonly minAge?: string;
  /**
  * Minimum number of rows that should be present before Cloud DLP profiles as a table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#min_row_count GoogleDataLossPreventionDiscoveryConfig#min_row_count}
  */
  readonly minRowCount?: number;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_age: cdktf.stringToTerraform(struct!.minAge),
    min_row_count: cdktf.numberToTerraform(struct!.minRowCount),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_row_count: {
      value: cdktf.numberToHclTerraform(struct!.minRowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._minRowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRowCount = this._minRowCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minAge = undefined;
      this._minRowCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minAge = value.minAge;
      this._minRowCount = value.minRowCount;
    }
  }

  // min_age - computed: false, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // min_row_count - computed: false, optional: true, required: false
  private _minRowCount?: number; 
  public get minRowCount() {
    return this.getNumberAttribute('min_row_count');
  }
  public set minRowCount(value: number) {
    this._minRowCount = value;
  }
  public resetMinRowCount() {
    this._minRowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRowCountInput() {
    return this._minRowCount;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes {
  /**
  * A set of BiqQuery table types Possible values: ["BIG_QUERY_TABLE_TYPE_TABLE", "BIG_QUERY_TABLE_TYPE_EXTERNAL_BIG_LAKE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._types = value.types;
    }
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions {
  /**
  * A timestamp in RFC3339 UTC "Zulu" format with nanosecond resolution and upto nine fractional digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#created_after GoogleDataLossPreventionDiscoveryConfig#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Restrict discovery to categories of table types. Currently view, materialized view, snapshot and non-biglake external tables are supported. Possible values: ["BIG_QUERY_COLLECTION_ALL_TYPES", "BIG_QUERY_COLLECTION_ONLY_SUPPORTED_TYPES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#type_collection GoogleDataLossPreventionDiscoveryConfig#type_collection}
  */
  readonly typeCollection?: string;
  /**
  * or_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#or_conditions GoogleDataLossPreventionDiscoveryConfig#or_conditions}
  */
  readonly orConditions?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions;
  /**
  * types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_after: cdktf.stringToTerraform(struct!.createdAfter),
    type_collection: cdktf.stringToTerraform(struct!.typeCollection),
    or_conditions: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsToTerraform(struct!.orConditions),
    types: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesToTerraform(struct!.types),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_after: {
      value: cdktf.stringToHclTerraform(struct!.createdAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_collection: {
      value: cdktf.stringToHclTerraform(struct!.typeCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    or_conditions: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsToHclTerraform(struct!.orConditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsList",
    },
    types: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesToHclTerraform(struct!.types),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAfter = this._createdAfter;
    }
    if (this._typeCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeCollection = this._typeCollection;
    }
    if (this._orConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orConditions = this._orConditions?.internalValue;
    }
    if (this._types?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createdAfter = undefined;
      this._typeCollection = undefined;
      this._orConditions.internalValue = undefined;
      this._types.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createdAfter = value.createdAfter;
      this._typeCollection = value.typeCollection;
      this._orConditions.internalValue = value.orConditions;
      this._types.internalValue = value.types;
    }
  }

  // created_after - computed: false, optional: true, required: false
  private _createdAfter?: string; 
  public get createdAfter() {
    return this.getStringAttribute('created_after');
  }
  public set createdAfter(value: string) {
    this._createdAfter = value;
  }
  public resetCreatedAfter() {
    this._createdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAfterInput() {
    return this._createdAfter;
  }

  // type_collection - computed: false, optional: true, required: false
  private _typeCollection?: string; 
  public get typeCollection() {
    return this.getStringAttribute('type_collection');
  }
  public set typeCollection(value: string) {
    this._typeCollection = value;
  }
  public resetTypeCollection() {
    this._typeCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCollectionInput() {
    return this._typeCollection;
  }

  // or_conditions - computed: false, optional: true, required: false
  private _orConditions = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditionsOutputReference(this, "or_conditions");
  public get orConditions() {
    return this._orConditions;
  }
  public putOrConditions(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions) {
    this._orConditions.internalValue = value;
  }
  public resetOrConditions() {
    this._orConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orConditionsInput() {
    return this._orConditions.internalValue;
  }

  // types - computed: false, optional: true, required: false
  private _types = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypesOutputReference(this, "types");
  public get types() {
    return this._types;
  }
  public putTypes(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsTypes) {
    this._types.internalValue = value;
  }
  public resetTypes() {
    this._types.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled {
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables {
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference {
  /**
  * Dataset ID of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#dataset_id GoogleDataLossPreventionDiscoveryConfig#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#table_id GoogleDataLossPreventionDiscoveryConfig#table_id}
  */
  readonly tableId: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns {
  /**
  * if unset, this property matches all datasets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#dataset_id_regex GoogleDataLossPreventionDiscoveryConfig#dataset_id_regex}
  */
  readonly datasetIdRegex?: string;
  /**
  * For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#project_id_regex GoogleDataLossPreventionDiscoveryConfig#project_id_regex}
  */
  readonly projectIdRegex?: string;
  /**
  * if unset, this property matches all tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#table_id_regex GoogleDataLossPreventionDiscoveryConfig#table_id_regex}
  */
  readonly tableIdRegex?: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id_regex: cdktf.stringToTerraform(struct!.datasetIdRegex),
    project_id_regex: cdktf.stringToTerraform(struct!.projectIdRegex),
    table_id_regex: cdktf.stringToTerraform(struct!.tableIdRegex),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.datasetIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.projectIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.tableIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdRegex = this._datasetIdRegex;
    }
    if (this._projectIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdRegex = this._projectIdRegex;
    }
    if (this._tableIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableIdRegex = this._tableIdRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetIdRegex = undefined;
      this._projectIdRegex = undefined;
      this._tableIdRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetIdRegex = value.datasetIdRegex;
      this._projectIdRegex = value.projectIdRegex;
      this._tableIdRegex = value.tableIdRegex;
    }
  }

  // dataset_id_regex - computed: false, optional: true, required: false
  private _datasetIdRegex?: string; 
  public get datasetIdRegex() {
    return this.getStringAttribute('dataset_id_regex');
  }
  public set datasetIdRegex(value: string) {
    this._datasetIdRegex = value;
  }
  public resetDatasetIdRegex() {
    this._datasetIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdRegexInput() {
    return this._datasetIdRegex;
  }

  // project_id_regex - computed: false, optional: true, required: false
  private _projectIdRegex?: string; 
  public get projectIdRegex() {
    return this.getStringAttribute('project_id_regex');
  }
  public set projectIdRegex(value: string) {
    this._projectIdRegex = value;
  }
  public resetProjectIdRegex() {
    this._projectIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdRegexInput() {
    return this._projectIdRegex;
  }

  // table_id_regex - computed: false, optional: true, required: false
  private _tableIdRegex?: string; 
  public get tableIdRegex() {
    return this.getStringAttribute('table_id_regex');
  }
  public set tableIdRegex(value: string) {
    this._tableIdRegex = value;
  }
  public resetTableIdRegex() {
    this._tableIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdRegexInput() {
    return this._tableIdRegex;
  }
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#patterns GoogleDataLossPreventionDiscoveryConfig#patterns}
  */
  readonly patterns?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsToTerraform, true)(struct!.patterns),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables {
  /**
  * include_regexes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#include_regexes GoogleDataLossPreventionDiscoveryConfig#include_regexes}
  */
  readonly includeRegexes?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_regexes: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesToTerraform(struct!.includeRegexes),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_regexes: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesToHclTerraform(struct!.includeRegexes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeRegexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRegexes = this._includeRegexes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeRegexes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeRegexes.internalValue = value.includeRegexes;
    }
  }

  // include_regexes - computed: false, optional: true, required: false
  private _includeRegexes = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesOutputReference(this, "include_regexes");
  public get includeRegexes() {
    return this._includeRegexes;
  }
  public putIncludeRegexes(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexes) {
    this._includeRegexes.internalValue = value;
  }
  public resetIncludeRegexes() {
    this._includeRegexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRegexesInput() {
    return this._includeRegexes.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter {
  /**
  * other_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#other_tables GoogleDataLossPreventionDiscoveryConfig#other_tables}
  */
  readonly otherTables?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables;
  /**
  * table_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#table_reference GoogleDataLossPreventionDiscoveryConfig#table_reference}
  */
  readonly tableReference?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#tables GoogleDataLossPreventionDiscoveryConfig#tables}
  */
  readonly tables?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other_tables: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesToTerraform(struct!.otherTables),
    table_reference: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceToTerraform(struct!.tableReference),
    tables: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesToTerraform(struct!.tables),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other_tables: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesToHclTerraform(struct!.otherTables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesList",
    },
    table_reference: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceToHclTerraform(struct!.tableReference),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceList",
    },
    tables: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._otherTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTables = this._otherTables?.internalValue;
    }
    if (this._tableReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReference = this._tableReference?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._otherTables.internalValue = undefined;
      this._tableReference.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._otherTables.internalValue = value.otherTables;
      this._tableReference.internalValue = value.tableReference;
      this._tables.internalValue = value.tables;
    }
  }

  // other_tables - computed: false, optional: true, required: false
  private _otherTables = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTablesOutputReference(this, "other_tables");
  public get otherTables() {
    return this._otherTables;
  }
  public putOtherTables(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables) {
    this._otherTables.internalValue = value;
  }
  public resetOtherTables() {
    this._otherTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTablesInput() {
    return this._otherTables.internalValue;
  }

  // table_reference - computed: false, optional: true, required: false
  private _tableReference = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReferenceOutputReference(this, "table_reference");
  public get tableReference() {
    return this._tableReference;
  }
  public putTableReference(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTableReference) {
    this._tableReference.internalValue = value;
  }
  public resetTableReference() {
    this._tableReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReferenceInput() {
    return this._tableReference.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget {
  /**
  * cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#cadence GoogleDataLossPreventionDiscoveryConfig#cadence}
  */
  readonly cadence?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#conditions GoogleDataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#disabled GoogleDataLossPreventionDiscoveryConfig#disabled}
  */
  readonly disabled?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#filter GoogleDataLossPreventionDiscoveryConfig#filter}
  */
  readonly filter?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cadence: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToTerraform(struct!.cadence),
    conditions: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsToTerraform(struct!.conditions),
    disabled: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledToTerraform(struct!.disabled),
    filter: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterToTerraform(struct!.filter),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToHclTerraform(struct!.cadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceList",
    },
    conditions: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsList",
    },
    disabled: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledList",
    },
    filter: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cadence = this._cadence?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cadence.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._disabled.internalValue = undefined;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cadence.internalValue = value.cadence;
      this._conditions.internalValue = value.conditions;
      this._disabled.internalValue = value.disabled;
      this._filter.internalValue = value.filter;
    }
  }

  // cadence - computed: false, optional: true, required: false
  private _cadence = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference(this, "cadence");
  public get cadence() {
    return this._cadence;
  }
  public putCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence) {
    this._cadence.internalValue = value;
  }
  public resetCadence() {
    this._cadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cadenceInput() {
    return this._cadence.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions {
  /**
  * Database engines that should be profiled. Optional. Defaults to ALL_SUPPORTED_DATABASE_ENGINES if unspecified. Possible values: ["ALL_SUPPORTED_DATABASE_ENGINES", "MYSQL", "POSTGRES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#database_engines GoogleDataLossPreventionDiscoveryConfig#database_engines}
  */
  readonly databaseEngines?: string[];
  /**
  * Data profiles will only be generated for the database resource types specified in this field. If not specified, defaults to [DATABASE_RESOURCE_TYPE_ALL_SUPPORTED_TYPES]. Possible values: ["DATABASE_RESOURCE_TYPE_ALL_SUPPORTED_TYPES", "DATABASE_RESOURCE_TYPE_TABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_engines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaseEngines),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_engines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaseEngines),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseEngines !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseEngines = this._databaseEngines;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseEngines = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseEngines = value.databaseEngines;
      this._types = value.types;
    }
  }

  // database_engines - computed: false, optional: true, required: false
  private _databaseEngines?: string[]; 
  public get databaseEngines() {
    return this.getListAttribute('database_engines');
  }
  public set databaseEngines(value: string[]) {
    this._databaseEngines = value;
  }
  public resetDatabaseEngines() {
    this._databaseEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEnginesInput() {
    return this._databaseEngines;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled {
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns {
  /**
  * Regex to test the database name against. If empty, all databases match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#database_regex GoogleDataLossPreventionDiscoveryConfig#database_regex}
  */
  readonly databaseRegex?: string;
  /**
  * Regex to test the database resource's name against. An example of a database resource name is a table's name. Other database resource names like view names could be included in the future. If empty, all database resources match.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#database_resource_name_regex GoogleDataLossPreventionDiscoveryConfig#database_resource_name_regex}
  */
  readonly databaseResourceNameRegex?: string;
  /**
  * Regex to test the instance name against. If empty, all instances match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#instance_regex GoogleDataLossPreventionDiscoveryConfig#instance_regex}
  */
  readonly instanceRegex?: string;
  /**
  * For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#project_id_regex GoogleDataLossPreventionDiscoveryConfig#project_id_regex}
  */
  readonly projectIdRegex?: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_regex: cdktf.stringToTerraform(struct!.databaseRegex),
    database_resource_name_regex: cdktf.stringToTerraform(struct!.databaseResourceNameRegex),
    instance_regex: cdktf.stringToTerraform(struct!.instanceRegex),
    project_id_regex: cdktf.stringToTerraform(struct!.projectIdRegex),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_regex: {
      value: cdktf.stringToHclTerraform(struct!.databaseRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_resource_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.databaseResourceNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_regex: {
      value: cdktf.stringToHclTerraform(struct!.instanceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.projectIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRegex = this._databaseRegex;
    }
    if (this._databaseResourceNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResourceNameRegex = this._databaseResourceNameRegex;
    }
    if (this._instanceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRegex = this._instanceRegex;
    }
    if (this._projectIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdRegex = this._projectIdRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseRegex = undefined;
      this._databaseResourceNameRegex = undefined;
      this._instanceRegex = undefined;
      this._projectIdRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseRegex = value.databaseRegex;
      this._databaseResourceNameRegex = value.databaseResourceNameRegex;
      this._instanceRegex = value.instanceRegex;
      this._projectIdRegex = value.projectIdRegex;
    }
  }

  // database_regex - computed: false, optional: true, required: false
  private _databaseRegex?: string; 
  public get databaseRegex() {
    return this.getStringAttribute('database_regex');
  }
  public set databaseRegex(value: string) {
    this._databaseRegex = value;
  }
  public resetDatabaseRegex() {
    this._databaseRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRegexInput() {
    return this._databaseRegex;
  }

  // database_resource_name_regex - computed: false, optional: true, required: false
  private _databaseResourceNameRegex?: string; 
  public get databaseResourceNameRegex() {
    return this.getStringAttribute('database_resource_name_regex');
  }
  public set databaseResourceNameRegex(value: string) {
    this._databaseResourceNameRegex = value;
  }
  public resetDatabaseResourceNameRegex() {
    this._databaseResourceNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceNameRegexInput() {
    return this._databaseResourceNameRegex;
  }

  // instance_regex - computed: false, optional: true, required: false
  private _instanceRegex?: string; 
  public get instanceRegex() {
    return this.getStringAttribute('instance_regex');
  }
  public set instanceRegex(value: string) {
    this._instanceRegex = value;
  }
  public resetInstanceRegex() {
    this._instanceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRegexInput() {
    return this._instanceRegex;
  }

  // project_id_regex - computed: false, optional: true, required: false
  private _projectIdRegex?: string; 
  public get projectIdRegex() {
    return this.getStringAttribute('project_id_regex');
  }
  public set projectIdRegex(value: string) {
    this._projectIdRegex = value;
  }
  public resetProjectIdRegex() {
    this._projectIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdRegexInput() {
    return this._projectIdRegex;
  }
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#patterns GoogleDataLossPreventionDiscoveryConfig#patterns}
  */
  readonly patterns?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsToTerraform, true)(struct!.patterns),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection {
  /**
  * include_regexes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#include_regexes GoogleDataLossPreventionDiscoveryConfig#include_regexes}
  */
  readonly includeRegexes?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_regexes: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesToTerraform(struct!.includeRegexes),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_regexes: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesToHclTerraform(struct!.includeRegexes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeRegexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRegexes = this._includeRegexes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeRegexes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeRegexes.internalValue = value.includeRegexes;
    }
  }

  // include_regexes - computed: false, optional: true, required: false
  private _includeRegexes = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexesOutputReference(this, "include_regexes");
  public get includeRegexes() {
    return this._includeRegexes;
  }
  public putIncludeRegexes(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionIncludeRegexes) {
    this._includeRegexes.internalValue = value;
  }
  public resetIncludeRegexes() {
    this._includeRegexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRegexesInput() {
    return this._includeRegexes.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference {
  /**
  * Required. Name of a database within the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#database GoogleDataLossPreventionDiscoveryConfig#database}
  */
  readonly database: string;
  /**
  * Required. Name of a database resource, for example, a table within the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#database_resource GoogleDataLossPreventionDiscoveryConfig#database_resource}
  */
  readonly databaseResource: string;
  /**
  * Required. The instance where this resource is located. For example: Cloud SQL instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#instance GoogleDataLossPreventionDiscoveryConfig#instance}
  */
  readonly instance: string;
  /**
  * Required. If within a project-level config, then this must match the config's project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#project_id GoogleDataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    database_resource: cdktf.stringToTerraform(struct!.databaseResource),
    instance: cdktf.stringToTerraform(struct!.instance),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_resource: {
      value: cdktf.stringToHclTerraform(struct!.databaseResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResource = this._databaseResource;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._databaseResource = undefined;
      this._instance = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._databaseResource = value.databaseResource;
      this._instance = value.instance;
      this._projectId = value.projectId;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_resource - computed: false, optional: false, required: true
  private _databaseResource?: string; 
  public get databaseResource() {
    return this.getStringAttribute('database_resource');
  }
  public set databaseResource(value: string) {
    this._databaseResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceInput() {
    return this._databaseResource;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers {
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter {
  /**
  * collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#collection GoogleDataLossPreventionDiscoveryConfig#collection}
  */
  readonly collection?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection;
  /**
  * database_resource_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#database_resource_reference GoogleDataLossPreventionDiscoveryConfig#database_resource_reference}
  */
  readonly databaseResourceReference?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference;
  /**
  * others block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#others GoogleDataLossPreventionDiscoveryConfig#others}
  */
  readonly others?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionToTerraform(struct!.collection),
    database_resource_reference: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceToTerraform(struct!.databaseResourceReference),
    others: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersToTerraform(struct!.others),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionToHclTerraform(struct!.collection),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionList",
    },
    database_resource_reference: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceToHclTerraform(struct!.databaseResourceReference),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceList",
    },
    others: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersToHclTerraform(struct!.others),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection?.internalValue;
    }
    if (this._databaseResourceReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResourceReference = this._databaseResourceReference?.internalValue;
    }
    if (this._others?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection.internalValue = undefined;
      this._databaseResourceReference.internalValue = undefined;
      this._others.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection.internalValue = value.collection;
      this._databaseResourceReference.internalValue = value.databaseResourceReference;
      this._others.internalValue = value.others;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollectionOutputReference(this, "collection");
  public get collection() {
    return this._collection;
  }
  public putCollection(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterCollection) {
    this._collection.internalValue = value;
  }
  public resetCollection() {
    this._collection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection.internalValue;
  }

  // database_resource_reference - computed: false, optional: true, required: false
  private _databaseResourceReference = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReferenceOutputReference(this, "database_resource_reference");
  public get databaseResourceReference() {
    return this._databaseResourceReference;
  }
  public putDatabaseResourceReference(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterDatabaseResourceReference) {
    this._databaseResourceReference.internalValue = value;
  }
  public resetDatabaseResourceReference() {
    this._databaseResourceReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceReferenceInput() {
    return this._databaseResourceReference.internalValue;
  }

  // others - computed: false, optional: true, required: false
  private _others = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthersOutputReference(this, "others");
  public get others() {
    return this._others;
  }
  public putOthers(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOthers) {
    this._others.internalValue = value;
  }
  public resetOthers() {
    this._others.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence {
  /**
  * How frequently data profiles can be updated when the template is modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence {
  /**
  * Frequency to regenerate data profiles when the schema is modified. Defaults to monthly. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
  /**
  * The types of schema modifications to consider. Defaults to NEW_COLUMNS. Possible values: ["NEW_COLUMNS", "REMOVED_COLUMNS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
  */
  readonly types?: string[];
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._types = value.types;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence {
  /**
  * Data changes (non-schema changes) in Cloud SQL tables can't trigger reprofiling. If you set this field, profiles are refreshed at this frequency regardless of whether the underlying tables have changes. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#refresh_frequency GoogleDataLossPreventionDiscoveryConfig#refresh_frequency}
  */
  readonly refreshFrequency?: string;
  /**
  * inspect_template_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#inspect_template_modified_cadence GoogleDataLossPreventionDiscoveryConfig#inspect_template_modified_cadence}
  */
  readonly inspectTemplateModifiedCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence;
  /**
  * schema_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#schema_modified_cadence GoogleDataLossPreventionDiscoveryConfig#schema_modified_cadence}
  */
  readonly schemaModifiedCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_frequency: cdktf.stringToTerraform(struct!.refreshFrequency),
    inspect_template_modified_cadence: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceToTerraform(struct!.inspectTemplateModifiedCadence),
    schema_modified_cadence: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceToTerraform(struct!.schemaModifiedCadence),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_frequency: {
      value: cdktf.stringToHclTerraform(struct!.refreshFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_template_modified_cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceToHclTerraform(struct!.inspectTemplateModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceList",
    },
    schema_modified_cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceToHclTerraform(struct!.schemaModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshFrequency = this._refreshFrequency;
    }
    if (this._inspectTemplateModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplateModifiedCadence = this._inspectTemplateModifiedCadence?.internalValue;
    }
    if (this._schemaModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaModifiedCadence = this._schemaModifiedCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshFrequency = undefined;
      this._inspectTemplateModifiedCadence.internalValue = undefined;
      this._schemaModifiedCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshFrequency = value.refreshFrequency;
      this._inspectTemplateModifiedCadence.internalValue = value.inspectTemplateModifiedCadence;
      this._schemaModifiedCadence.internalValue = value.schemaModifiedCadence;
    }
  }

  // refresh_frequency - computed: false, optional: true, required: false
  private _refreshFrequency?: string; 
  public get refreshFrequency() {
    return this.getStringAttribute('refresh_frequency');
  }
  public set refreshFrequency(value: string) {
    this._refreshFrequency = value;
  }
  public resetRefreshFrequency() {
    this._refreshFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshFrequencyInput() {
    return this._refreshFrequency;
  }

  // inspect_template_modified_cadence - computed: false, optional: true, required: false
  private _inspectTemplateModifiedCadence = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference(this, "inspect_template_modified_cadence");
  public get inspectTemplateModifiedCadence() {
    return this._inspectTemplateModifiedCadence;
  }
  public putInspectTemplateModifiedCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceInspectTemplateModifiedCadence) {
    this._inspectTemplateModifiedCadence.internalValue = value;
  }
  public resetInspectTemplateModifiedCadence() {
    this._inspectTemplateModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateModifiedCadenceInput() {
    return this._inspectTemplateModifiedCadence.internalValue;
  }

  // schema_modified_cadence - computed: false, optional: true, required: false
  private _schemaModifiedCadence = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadenceOutputReference(this, "schema_modified_cadence");
  public get schemaModifiedCadence() {
    return this._schemaModifiedCadence;
  }
  public putSchemaModifiedCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceSchemaModifiedCadence) {
    this._schemaModifiedCadence.internalValue = value;
  }
  public resetSchemaModifiedCadence() {
    this._schemaModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaModifiedCadenceInput() {
    return this._schemaModifiedCadence.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTarget {
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#conditions GoogleDataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#disabled GoogleDataLossPreventionDiscoveryConfig#disabled}
  */
  readonly disabled?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#filter GoogleDataLossPreventionDiscoveryConfig#filter}
  */
  readonly filter: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter;
  /**
  * generation_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#generation_cadence GoogleDataLossPreventionDiscoveryConfig#generation_cadence}
  */
  readonly generationCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsToTerraform(struct!.conditions),
    disabled: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledToTerraform(struct!.disabled),
    filter: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterToTerraform(struct!.filter),
    generation_cadence: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceToTerraform(struct!.generationCadence),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsList",
    },
    disabled: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledList",
    },
    filter: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterList",
    },
    generation_cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceToHclTerraform(struct!.generationCadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._generationCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationCadence = this._generationCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditions.internalValue = undefined;
      this._disabled.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._generationCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditions.internalValue = value.conditions;
      this._disabled.internalValue = value.disabled;
      this._filter.internalValue = value.filter;
      this._generationCadence.internalValue = value.generationCadence;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // generation_cadence - computed: false, optional: true, required: false
  private _generationCadence = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadenceOutputReference(this, "generation_cadence");
  public get generationCadence() {
    return this._generationCadence;
  }
  public putGenerationCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetGenerationCadence) {
    this._generationCadence.internalValue = value;
  }
  public resetGenerationCadence() {
    this._generationCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationCadenceInput() {
    return this._generationCadence.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions {
  /**
  * Only objects with the specified attributes will be scanned. Defaults to [ALL_SUPPORTED_BUCKETS] if unset. Possible values: ["ALL_SUPPORTED_BUCKETS", "AUTOCLASS_DISABLED", "AUTOCLASS_ENABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#included_bucket_attributes GoogleDataLossPreventionDiscoveryConfig#included_bucket_attributes}
  */
  readonly includedBucketAttributes?: string[];
  /**
  * Only objects with the specified attributes will be scanned. If an object has one of the specified attributes but is inside an excluded bucket, it will not be scanned. Defaults to [ALL_SUPPORTED_OBJECTS]. A profile will be created even if no objects match the included_object_attributes. Possible values: ["ALL_SUPPORTED_OBJECTS", "STANDARD", "NEARLINE", "COLDLINE", "ARCHIVE", "REGIONAL", "MULTI_REGIONAL", "DURABLE_REDUCED_AVAILABILITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#included_object_attributes GoogleDataLossPreventionDiscoveryConfig#included_object_attributes}
  */
  readonly includedObjectAttributes?: string[];
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_bucket_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedBucketAttributes),
    included_object_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedObjectAttributes),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    included_bucket_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedBucketAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_object_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedObjectAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedBucketAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedBucketAttributes = this._includedBucketAttributes;
    }
    if (this._includedObjectAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedObjectAttributes = this._includedObjectAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedBucketAttributes = undefined;
      this._includedObjectAttributes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedBucketAttributes = value.includedBucketAttributes;
      this._includedObjectAttributes = value.includedObjectAttributes;
    }
  }

  // included_bucket_attributes - computed: false, optional: true, required: false
  private _includedBucketAttributes?: string[]; 
  public get includedBucketAttributes() {
    return this.getListAttribute('included_bucket_attributes');
  }
  public set includedBucketAttributes(value: string[]) {
    this._includedBucketAttributes = value;
  }
  public resetIncludedBucketAttributes() {
    this._includedBucketAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedBucketAttributesInput() {
    return this._includedBucketAttributes;
  }

  // included_object_attributes - computed: false, optional: true, required: false
  private _includedObjectAttributes?: string[]; 
  public get includedObjectAttributes() {
    return this.getListAttribute('included_object_attributes');
  }
  public set includedObjectAttributes(value: string[]) {
    this._includedObjectAttributes = value;
  }
  public resetIncludedObjectAttributes() {
    this._includedObjectAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedObjectAttributesInput() {
    return this._includedObjectAttributes;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions {
  /**
  * File store must have been created after this date. Used to avoid backfilling. A timestamp in RFC3339 UTC "Zulu" format with nanosecond resolution and upto nine fractional digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#created_after GoogleDataLossPreventionDiscoveryConfig#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Duration format. Minimum age a file store must have. If set, the value must be 1 hour or greater.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#min_age GoogleDataLossPreventionDiscoveryConfig#min_age}
  */
  readonly minAge?: string;
  /**
  * cloud_storage_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#cloud_storage_conditions GoogleDataLossPreventionDiscoveryConfig#cloud_storage_conditions}
  */
  readonly cloudStorageConditions?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_after: cdktf.stringToTerraform(struct!.createdAfter),
    min_age: cdktf.stringToTerraform(struct!.minAge),
    cloud_storage_conditions: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsToTerraform(struct!.cloudStorageConditions),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_after: {
      value: cdktf.stringToHclTerraform(struct!.createdAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_storage_conditions: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsToHclTerraform(struct!.cloudStorageConditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAfter = this._createdAfter;
    }
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._cloudStorageConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageConditions = this._cloudStorageConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createdAfter = undefined;
      this._minAge = undefined;
      this._cloudStorageConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createdAfter = value.createdAfter;
      this._minAge = value.minAge;
      this._cloudStorageConditions.internalValue = value.cloudStorageConditions;
    }
  }

  // created_after - computed: false, optional: true, required: false
  private _createdAfter?: string; 
  public get createdAfter() {
    return this.getStringAttribute('created_after');
  }
  public set createdAfter(value: string) {
    this._createdAfter = value;
  }
  public resetCreatedAfter() {
    this._createdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAfterInput() {
    return this._createdAfter;
  }

  // min_age - computed: false, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // cloud_storage_conditions - computed: false, optional: true, required: false
  private _cloudStorageConditions = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditionsOutputReference(this, "cloud_storage_conditions");
  public get cloudStorageConditions() {
    return this._cloudStorageConditions;
  }
  public putCloudStorageConditions(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsCloudStorageConditions) {
    this._cloudStorageConditions.internalValue = value;
  }
  public resetCloudStorageConditions() {
    this._cloudStorageConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageConditionsInput() {
    return this._cloudStorageConditions.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled {
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference {
  /**
  * The bucket to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#bucket_name GoogleDataLossPreventionDiscoveryConfig#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * If within a project-level config, then this must match the config's project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#project_id GoogleDataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId?: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._projectId = value.projectId;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex {
  /**
  * Regex to test the bucket name against. If empty, all buckets match. Example: "marketing2021" or "(marketing)\d{4}" will both match the bucket gs://marketing2021
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#bucket_name_regex GoogleDataLossPreventionDiscoveryConfig#bucket_name_regex}
  */
  readonly bucketNameRegex?: string;
  /**
  * For organizations, if unset, will match all projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#project_id_regex GoogleDataLossPreventionDiscoveryConfig#project_id_regex}
  */
  readonly projectIdRegex?: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name_regex: cdktf.stringToTerraform(struct!.bucketNameRegex),
    project_id_regex: cdktf.stringToTerraform(struct!.projectIdRegex),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.bucketNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id_regex: {
      value: cdktf.stringToHclTerraform(struct!.projectIdRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketNameRegex = this._bucketNameRegex;
    }
    if (this._projectIdRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdRegex = this._projectIdRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketNameRegex = undefined;
      this._projectIdRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketNameRegex = value.bucketNameRegex;
      this._projectIdRegex = value.projectIdRegex;
    }
  }

  // bucket_name_regex - computed: false, optional: true, required: false
  private _bucketNameRegex?: string; 
  public get bucketNameRegex() {
    return this.getStringAttribute('bucket_name_regex');
  }
  public set bucketNameRegex(value: string) {
    this._bucketNameRegex = value;
  }
  public resetBucketNameRegex() {
    this._bucketNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameRegexInput() {
    return this._bucketNameRegex;
  }

  // project_id_regex - computed: false, optional: true, required: false
  private _projectIdRegex?: string; 
  public get projectIdRegex() {
    return this.getStringAttribute('project_id_regex');
  }
  public set projectIdRegex(value: string) {
    this._projectIdRegex = value;
  }
  public resetProjectIdRegex() {
    this._projectIdRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdRegexInput() {
    return this._projectIdRegex;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns {
  /**
  * cloud_storage_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#cloud_storage_regex GoogleDataLossPreventionDiscoveryConfig#cloud_storage_regex}
  */
  readonly cloudStorageRegex?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_regex: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexToTerraform(struct!.cloudStorageRegex),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_regex: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexToHclTerraform(struct!.cloudStorageRegex),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStorageRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageRegex = this._cloudStorageRegex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudStorageRegex.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudStorageRegex.internalValue = value.cloudStorageRegex;
    }
  }

  // cloud_storage_regex - computed: false, optional: true, required: false
  private _cloudStorageRegex = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegexOutputReference(this, "cloud_storage_regex");
  public get cloudStorageRegex() {
    return this._cloudStorageRegex;
  }
  public putCloudStorageRegex(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsCloudStorageRegex) {
    this._cloudStorageRegex.internalValue = value;
  }
  public resetCloudStorageRegex() {
    this._cloudStorageRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageRegexInput() {
    return this._cloudStorageRegex.internalValue;
  }
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes {
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#patterns GoogleDataLossPreventionDiscoveryConfig#patterns}
  */
  readonly patterns?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patterns: cdktf.listMapper(googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsToTerraform, true)(struct!.patterns),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patterns: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patterns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patterns.internalValue = value.patterns;
    }
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection {
  /**
  * include_regexes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#include_regexes GoogleDataLossPreventionDiscoveryConfig#include_regexes}
  */
  readonly includeRegexes?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_regexes: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesToTerraform(struct!.includeRegexes),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_regexes: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesToHclTerraform(struct!.includeRegexes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeRegexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRegexes = this._includeRegexes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeRegexes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeRegexes.internalValue = value.includeRegexes;
    }
  }

  // include_regexes - computed: false, optional: true, required: false
  private _includeRegexes = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexesOutputReference(this, "include_regexes");
  public get includeRegexes() {
    return this._includeRegexes;
  }
  public putIncludeRegexes(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionIncludeRegexes) {
    this._includeRegexes.internalValue = value;
  }
  public resetIncludeRegexes() {
    this._includeRegexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRegexesInput() {
    return this._includeRegexes.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers {
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter {
  /**
  * cloud_storage_resource_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#cloud_storage_resource_reference GoogleDataLossPreventionDiscoveryConfig#cloud_storage_resource_reference}
  */
  readonly cloudStorageResourceReference?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference;
  /**
  * collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#collection GoogleDataLossPreventionDiscoveryConfig#collection}
  */
  readonly collection?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection;
  /**
  * others block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#others GoogleDataLossPreventionDiscoveryConfig#others}
  */
  readonly others?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_resource_reference: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceToTerraform(struct!.cloudStorageResourceReference),
    collection: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionToTerraform(struct!.collection),
    others: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersToTerraform(struct!.others),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_resource_reference: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceToHclTerraform(struct!.cloudStorageResourceReference),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceList",
    },
    collection: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionToHclTerraform(struct!.collection),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionList",
    },
    others: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersToHclTerraform(struct!.others),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStorageResourceReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageResourceReference = this._cloudStorageResourceReference?.internalValue;
    }
    if (this._collection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection?.internalValue;
    }
    if (this._others?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStorageResourceReference.internalValue = undefined;
      this._collection.internalValue = undefined;
      this._others.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStorageResourceReference.internalValue = value.cloudStorageResourceReference;
      this._collection.internalValue = value.collection;
      this._others.internalValue = value.others;
    }
  }

  // cloud_storage_resource_reference - computed: false, optional: true, required: false
  private _cloudStorageResourceReference = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReferenceOutputReference(this, "cloud_storage_resource_reference");
  public get cloudStorageResourceReference() {
    return this._cloudStorageResourceReference;
  }
  public putCloudStorageResourceReference(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCloudStorageResourceReference) {
    this._cloudStorageResourceReference.internalValue = value;
  }
  public resetCloudStorageResourceReference() {
    this._cloudStorageResourceReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageResourceReferenceInput() {
    return this._cloudStorageResourceReference.internalValue;
  }

  // collection - computed: false, optional: true, required: false
  private _collection = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollectionOutputReference(this, "collection");
  public get collection() {
    return this._collection;
  }
  public putCollection(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterCollection) {
    this._collection.internalValue = value;
  }
  public resetCollection() {
    this._collection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection.internalValue;
  }

  // others - computed: false, optional: true, required: false
  private _others = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthersOutputReference(this, "others");
  public get others() {
    return this._others;
  }
  public putOthers(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOthers) {
    this._others.internalValue = value;
  }
  public resetOthers() {
    this._others.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence {
  /**
  * How frequently data profiles can be updated when the template is modified. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence {
  /**
  * Data changes in Cloud Storage can't trigger reprofiling. If you set this field, profiles are refreshed at this frequency regardless of whether the underlying buckets have changes. Defaults to never. Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#refresh_frequency GoogleDataLossPreventionDiscoveryConfig#refresh_frequency}
  */
  readonly refreshFrequency?: string;
  /**
  * inspect_template_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#inspect_template_modified_cadence GoogleDataLossPreventionDiscoveryConfig#inspect_template_modified_cadence}
  */
  readonly inspectTemplateModifiedCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_frequency: cdktf.stringToTerraform(struct!.refreshFrequency),
    inspect_template_modified_cadence: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceToTerraform(struct!.inspectTemplateModifiedCadence),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_frequency: {
      value: cdktf.stringToHclTerraform(struct!.refreshFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspect_template_modified_cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceToHclTerraform(struct!.inspectTemplateModifiedCadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshFrequency = this._refreshFrequency;
    }
    if (this._inspectTemplateModifiedCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplateModifiedCadence = this._inspectTemplateModifiedCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshFrequency = undefined;
      this._inspectTemplateModifiedCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshFrequency = value.refreshFrequency;
      this._inspectTemplateModifiedCadence.internalValue = value.inspectTemplateModifiedCadence;
    }
  }

  // refresh_frequency - computed: false, optional: true, required: false
  private _refreshFrequency?: string; 
  public get refreshFrequency() {
    return this.getStringAttribute('refresh_frequency');
  }
  public set refreshFrequency(value: string) {
    this._refreshFrequency = value;
  }
  public resetRefreshFrequency() {
    this._refreshFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshFrequencyInput() {
    return this._refreshFrequency;
  }

  // inspect_template_modified_cadence - computed: false, optional: true, required: false
  private _inspectTemplateModifiedCadence = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadenceOutputReference(this, "inspect_template_modified_cadence");
  public get inspectTemplateModifiedCadence() {
    return this._inspectTemplateModifiedCadence;
  }
  public putInspectTemplateModifiedCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceInspectTemplateModifiedCadence) {
    this._inspectTemplateModifiedCadence.internalValue = value;
  }
  public resetInspectTemplateModifiedCadence() {
    this._inspectTemplateModifiedCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateModifiedCadenceInput() {
    return this._inspectTemplateModifiedCadence.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTarget {
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#conditions GoogleDataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#disabled GoogleDataLossPreventionDiscoveryConfig#disabled}
  */
  readonly disabled?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#filter GoogleDataLossPreventionDiscoveryConfig#filter}
  */
  readonly filter: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter;
  /**
  * generation_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#generation_cadence GoogleDataLossPreventionDiscoveryConfig#generation_cadence}
  */
  readonly generationCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence;
}

export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsToTerraform(struct!.conditions),
    disabled: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledToTerraform(struct!.disabled),
    filter: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterToTerraform(struct!.filter),
    generation_cadence: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceToTerraform(struct!.generationCadence),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsList",
    },
    disabled: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledList",
    },
    filter: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterList",
    },
    generation_cadence: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceToHclTerraform(struct!.generationCadence),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._generationCadence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationCadence = this._generationCadence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditions.internalValue = undefined;
      this._disabled.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._generationCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditions.internalValue = value.conditions;
      this._disabled.internalValue = value.disabled;
      this._filter.internalValue = value.filter;
      this._generationCadence.internalValue = value.generationCadence;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // generation_cadence - computed: false, optional: true, required: false
  private _generationCadence = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadenceOutputReference(this, "generation_cadence");
  public get generationCadence() {
    return this._generationCadence;
  }
  public putGenerationCadence(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetGenerationCadence) {
    this._generationCadence.internalValue = value;
  }
  public resetGenerationCadence() {
    this._generationCadence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationCadenceInput() {
    return this._generationCadence.internalValue;
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTarget {
}

export function googleDataLossPreventionDiscoveryConfigTargetsSecretsTargetToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTargetOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsSecretsTargetToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTargetOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTargets {
  /**
  * big_query_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#big_query_target GoogleDataLossPreventionDiscoveryConfig#big_query_target}
  */
  readonly bigQueryTarget?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget;
  /**
  * cloud_sql_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#cloud_sql_target GoogleDataLossPreventionDiscoveryConfig#cloud_sql_target}
  */
  readonly cloudSqlTarget?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTarget;
  /**
  * cloud_storage_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#cloud_storage_target GoogleDataLossPreventionDiscoveryConfig#cloud_storage_target}
  */
  readonly cloudStorageTarget?: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTarget;
  /**
  * secrets_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#secrets_target GoogleDataLossPreventionDiscoveryConfig#secrets_target}
  */
  readonly secretsTarget?: GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTarget;
}

export function googleDataLossPreventionDiscoveryConfigTargetsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    big_query_target: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetToTerraform(struct!.bigQueryTarget),
    cloud_sql_target: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetToTerraform(struct!.cloudSqlTarget),
    cloud_storage_target: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetToTerraform(struct!.cloudStorageTarget),
    secrets_target: googleDataLossPreventionDiscoveryConfigTargetsSecretsTargetToTerraform(struct!.secretsTarget),
  }
}


export function googleDataLossPreventionDiscoveryConfigTargetsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    big_query_target: {
      value: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetToHclTerraform(struct!.bigQueryTarget),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetList",
    },
    cloud_sql_target: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetToHclTerraform(struct!.cloudSqlTarget),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetList",
    },
    cloud_storage_target: {
      value: googleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetToHclTerraform(struct!.cloudStorageTarget),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetList",
    },
    secrets_target: {
      value: googleDataLossPreventionDiscoveryConfigTargetsSecretsTargetToHclTerraform(struct!.secretsTarget),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryTarget = this._bigQueryTarget?.internalValue;
    }
    if (this._cloudSqlTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlTarget = this._cloudSqlTarget?.internalValue;
    }
    if (this._cloudStorageTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageTarget = this._cloudStorageTarget?.internalValue;
    }
    if (this._secretsTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsTarget = this._secretsTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bigQueryTarget.internalValue = undefined;
      this._cloudSqlTarget.internalValue = undefined;
      this._cloudStorageTarget.internalValue = undefined;
      this._secretsTarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bigQueryTarget.internalValue = value.bigQueryTarget;
      this._cloudSqlTarget.internalValue = value.cloudSqlTarget;
      this._cloudStorageTarget.internalValue = value.cloudStorageTarget;
      this._secretsTarget.internalValue = value.secretsTarget;
    }
  }

  // big_query_target - computed: false, optional: true, required: false
  private _bigQueryTarget = new GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetOutputReference(this, "big_query_target");
  public get bigQueryTarget() {
    return this._bigQueryTarget;
  }
  public putBigQueryTarget(value: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget) {
    this._bigQueryTarget.internalValue = value;
  }
  public resetBigQueryTarget() {
    this._bigQueryTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryTargetInput() {
    return this._bigQueryTarget.internalValue;
  }

  // cloud_sql_target - computed: false, optional: true, required: false
  private _cloudSqlTarget = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTargetOutputReference(this, "cloud_sql_target");
  public get cloudSqlTarget() {
    return this._cloudSqlTarget;
  }
  public putCloudSqlTarget(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudSqlTarget) {
    this._cloudSqlTarget.internalValue = value;
  }
  public resetCloudSqlTarget() {
    this._cloudSqlTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlTargetInput() {
    return this._cloudSqlTarget.internalValue;
  }

  // cloud_storage_target - computed: false, optional: true, required: false
  private _cloudStorageTarget = new GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTargetOutputReference(this, "cloud_storage_target");
  public get cloudStorageTarget() {
    return this._cloudStorageTarget;
  }
  public putCloudStorageTarget(value: GoogleDataLossPreventionDiscoveryConfigTargetsCloudStorageTarget) {
    this._cloudStorageTarget.internalValue = value;
  }
  public resetCloudStorageTarget() {
    this._cloudStorageTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageTargetInput() {
    return this._cloudStorageTarget.internalValue;
  }

  // secrets_target - computed: false, optional: true, required: false
  private _secretsTarget = new GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTargetOutputReference(this, "secrets_target");
  public get secretsTarget() {
    return this._secretsTarget;
  }
  public putSecretsTarget(value: GoogleDataLossPreventionDiscoveryConfigTargetsSecretsTarget) {
    this._secretsTarget.internalValue = value;
  }
  public resetSecretsTarget() {
    this._secretsTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsTargetInput() {
    return this._secretsTarget.internalValue;
  }
}

export class GoogleDataLossPreventionDiscoveryConfigTargetsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDiscoveryConfigTargets[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference {
    return new GoogleDataLossPreventionDiscoveryConfigTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDiscoveryConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#create GoogleDataLossPreventionDiscoveryConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#delete GoogleDataLossPreventionDiscoveryConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#update GoogleDataLossPreventionDiscoveryConfig#update}
  */
  readonly update?: string;
}

export function googleDataLossPreventionDiscoveryConfigTimeoutsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTimeouts | cdktf.IResolvable): any {
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


export function googleDataLossPreventionDiscoveryConfigTimeoutsToHclTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataLossPreventionDiscoveryConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config google_data_loss_prevention_discovery_config}
*/
export class GoogleDataLossPreventionDiscoveryConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_discovery_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataLossPreventionDiscoveryConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataLossPreventionDiscoveryConfig to import
  * @param importFromId The id of the existing GoogleDataLossPreventionDiscoveryConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataLossPreventionDiscoveryConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_loss_prevention_discovery_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_data_loss_prevention_discovery_config google_data_loss_prevention_discovery_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataLossPreventionDiscoveryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataLossPreventionDiscoveryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_discovery_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.12.0',
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
    this._id = config.id;
    this._inspectTemplates = config.inspectTemplates;
    this._location = config.location;
    this._parent = config.parent;
    this._status = config.status;
    this._actions.internalValue = config.actions;
    this._orgConfig.internalValue = config.orgConfig;
    this._targets.internalValue = config.targets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // errors - computed: true, optional: false, required: false
  private _errors = new GoogleDataLossPreventionDiscoveryConfigErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
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

  // inspect_templates - computed: false, optional: true, required: false
  private _inspectTemplates?: string[]; 
  public get inspectTemplates() {
    return this.getListAttribute('inspect_templates');
  }
  public set inspectTemplates(value: string[]) {
    this._inspectTemplates = value;
  }
  public resetInspectTemplates() {
    this._inspectTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplatesInput() {
    return this._inspectTemplates;
  }

  // last_run_time - computed: true, optional: false, required: false
  public get lastRunTime() {
    return this.getStringAttribute('last_run_time');
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new GoogleDataLossPreventionDiscoveryConfigActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: GoogleDataLossPreventionDiscoveryConfigActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // org_config - computed: false, optional: true, required: false
  private _orgConfig = new GoogleDataLossPreventionDiscoveryConfigOrgConfigOutputReference(this, "org_config");
  public get orgConfig() {
    return this._orgConfig;
  }
  public putOrgConfig(value: GoogleDataLossPreventionDiscoveryConfigOrgConfig) {
    this._orgConfig.internalValue = value;
  }
  public resetOrgConfig() {
    this._orgConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgConfigInput() {
    return this._orgConfig.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new GoogleDataLossPreventionDiscoveryConfigTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: GoogleDataLossPreventionDiscoveryConfigTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataLossPreventionDiscoveryConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataLossPreventionDiscoveryConfigTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      inspect_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inspectTemplates),
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
      status: cdktf.stringToTerraform(this._status),
      actions: cdktf.listMapper(googleDataLossPreventionDiscoveryConfigActionsToTerraform, true)(this._actions.internalValue),
      org_config: googleDataLossPreventionDiscoveryConfigOrgConfigToTerraform(this._orgConfig.internalValue),
      targets: cdktf.listMapper(googleDataLossPreventionDiscoveryConfigTargetsToTerraform, true)(this._targets.internalValue),
      timeouts: googleDataLossPreventionDiscoveryConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspect_templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inspectTemplates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.listMapperHcl(googleDataLossPreventionDiscoveryConfigActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionDiscoveryConfigActionsList",
      },
      org_config: {
        value: googleDataLossPreventionDiscoveryConfigOrgConfigToHclTerraform(this._orgConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionDiscoveryConfigOrgConfigList",
      },
      targets: {
        value: cdktf.listMapperHcl(googleDataLossPreventionDiscoveryConfigTargetsToHclTerraform, true)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionDiscoveryConfigTargetsList",
      },
      timeouts: {
        value: googleDataLossPreventionDiscoveryConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataLossPreventionDiscoveryConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
