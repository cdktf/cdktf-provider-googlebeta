// https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataLossPreventionDiscoveryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display Name (max 1000 Chars)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#display_name GoogleDataLossPreventionDiscoveryConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#id GoogleDataLossPreventionDiscoveryConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Detection logic for profile generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#inspect_templates GoogleDataLossPreventionDiscoveryConfig#inspect_templates}
  */
  readonly inspectTemplates?: string[];
  /**
  * Location to create the discovery config in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#location GoogleDataLossPreventionDiscoveryConfig#location}
  */
  readonly location: string;
  /**
  * The parent of the discovery config in any of the following formats:
  * 
  * * 'projects/{{project}}/locations/{{location}}'
  * * 'organizations/{{organization_id}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#parent GoogleDataLossPreventionDiscoveryConfig#parent}
  */
  readonly parent: string;
  /**
  * Required. A status for this configuration Possible values: ["RUNNING", "PAUSED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#status GoogleDataLossPreventionDiscoveryConfig#status}
  */
  readonly status?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#actions GoogleDataLossPreventionDiscoveryConfig#actions}
  */
  readonly actions?: GoogleDataLossPreventionDiscoveryConfigActions[] | cdktf.IResolvable;
  /**
  * org_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#org_config GoogleDataLossPreventionDiscoveryConfig#org_config}
  */
  readonly orgConfig?: GoogleDataLossPreventionDiscoveryConfigOrgConfig;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#targets GoogleDataLossPreventionDiscoveryConfig#targets}
  */
  readonly targets?: GoogleDataLossPreventionDiscoveryConfigTargets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#timeouts GoogleDataLossPreventionDiscoveryConfig#timeouts}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#dataset_id GoogleDataLossPreventionDiscoveryConfig#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table. If omitted, the project ID is inferred from the API call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#project_id GoogleDataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#table_id GoogleDataLossPreventionDiscoveryConfig#table_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#profile_table GoogleDataLossPreventionDiscoveryConfig#profile_table}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#minimum_risk_score GoogleDataLossPreventionDiscoveryConfig#minimum_risk_score}
  */
  readonly minimumRiskScore?: string;
  /**
  * The minimum sensitivity level that triggers the condition. Possible values: ["HIGH", "MEDIUM_OR_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#minimum_sensitivity_score GoogleDataLossPreventionDiscoveryConfig#minimum_sensitivity_score}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#logical_operator GoogleDataLossPreventionDiscoveryConfig#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#conditions GoogleDataLossPreventionDiscoveryConfig#conditions}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#expressions GoogleDataLossPreventionDiscoveryConfig#expressions}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#detail_of_message GoogleDataLossPreventionDiscoveryConfig#detail_of_message}
  */
  readonly detailOfMessage?: string;
  /**
  * The type of event that triggers a Pub/Sub. At most one PubSubNotification per EventType is permitted. Possible values: ["NEW_PROFILE", "CHANGED_PROFILE", "SCORE_INCREASED", "ERROR_CHANGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#event GoogleDataLossPreventionDiscoveryConfig#event}
  */
  readonly event?: string;
  /**
  * Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#topic GoogleDataLossPreventionDiscoveryConfig#topic}
  */
  readonly topic?: string;
  /**
  * pubsub_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#pubsub_condition GoogleDataLossPreventionDiscoveryConfig#pubsub_condition}
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
export interface GoogleDataLossPreventionDiscoveryConfigActions {
  /**
  * export_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#export_data GoogleDataLossPreventionDiscoveryConfig#export_data}
  */
  readonly exportData?: GoogleDataLossPreventionDiscoveryConfigActionsExportData;
  /**
  * pub_sub_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#pub_sub_notification GoogleDataLossPreventionDiscoveryConfig#pub_sub_notification}
  */
  readonly pubSubNotification?: GoogleDataLossPreventionDiscoveryConfigActionsPubSubNotification;
}

export function googleDataLossPreventionDiscoveryConfigActionsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_data: googleDataLossPreventionDiscoveryConfigActionsExportDataToTerraform(struct!.exportData),
    pub_sub_notification: googleDataLossPreventionDiscoveryConfigActionsPubSubNotificationToTerraform(struct!.pubSubNotification),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportData.internalValue = undefined;
      this._pubSubNotification.internalValue = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#folder_id GoogleDataLossPreventionDiscoveryConfig#folder_id}
  */
  readonly folderId?: string;
  /**
  * The ID of an organization to scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#organization_id GoogleDataLossPreventionDiscoveryConfig#organization_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#project_id GoogleDataLossPreventionDiscoveryConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#location GoogleDataLossPreventionDiscoveryConfig#location}
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
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence {
  /**
  * How frequently profiles may be updated when schemas are modified. Default to monthly Possible values: ["UPDATE_FREQUENCY_NEVER", "UPDATE_FREQUENCY_DAILY", "UPDATE_FREQUENCY_MONTHLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
  /**
  * The type of events to consider when deciding if the table's schema has been modified and should have the profile updated. Defaults to NEW_COLUMN. Possible values: ["SCHEMA_NEW_COLUMNS", "SCHEMA_REMOVED_COLUMNS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#frequency GoogleDataLossPreventionDiscoveryConfig#frequency}
  */
  readonly frequency?: string;
  /**
  * The type of events to consider when deciding if the table has been modified and should have the profile updated. Defaults to MODIFIED_TIMESTAMP Possible values: ["TABLE_MODIFIED_TIMESTAMP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
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
  * schema_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#schema_modified_cadence GoogleDataLossPreventionDiscoveryConfig#schema_modified_cadence}
  */
  readonly schemaModifiedCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceSchemaModifiedCadence;
  /**
  * table_modified_cadence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#table_modified_cadence GoogleDataLossPreventionDiscoveryConfig#table_modified_cadence}
  */
  readonly tableModifiedCadence?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceTableModifiedCadence;
}

export function googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadenceOutputReference | GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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
      this._schemaModifiedCadence.internalValue = undefined;
      this._tableModifiedCadence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaModifiedCadence.internalValue = value.schemaModifiedCadence;
      this._tableModifiedCadence.internalValue = value.tableModifiedCadence;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#min_age GoogleDataLossPreventionDiscoveryConfig#min_age}
  */
  readonly minAge?: string;
  /**
  * Minimum number of rows that should be present before Cloud DLP profiles as a table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#min_row_count GoogleDataLossPreventionDiscoveryConfig#min_row_count}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#created_after GoogleDataLossPreventionDiscoveryConfig#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Restrict discovery to categories of table types. Currently view, materialized view, snapshot and non-biglake external tables are supported. Possible values: ["BIG_QUERY_COLLECTION_ALL_TYPES", "BIG_QUERY_COLLECTION_ONLY_SUPPORTED_TYPES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#type_collection GoogleDataLossPreventionDiscoveryConfig#type_collection}
  */
  readonly typeCollection?: string;
  /**
  * or_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#or_conditions GoogleDataLossPreventionDiscoveryConfig#or_conditions}
  */
  readonly orConditions?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditionsOrConditions;
  /**
  * types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#types GoogleDataLossPreventionDiscoveryConfig#types}
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
export interface GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterTablesIncludeRegexesPatterns {
  /**
  * if unset, this property matches all datasets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#dataset_id_regex GoogleDataLossPreventionDiscoveryConfig#dataset_id_regex}
  */
  readonly datasetIdRegex?: string;
  /**
  * For organizations, if unset, will match all projects. Has no effect for data profile configurations created within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#project_id_regex GoogleDataLossPreventionDiscoveryConfig#project_id_regex}
  */
  readonly projectIdRegex?: string;
  /**
  * if unset, this property matches all tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#table_id_regex GoogleDataLossPreventionDiscoveryConfig#table_id_regex}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#patterns GoogleDataLossPreventionDiscoveryConfig#patterns}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#include_regexes GoogleDataLossPreventionDiscoveryConfig#include_regexes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#other_tables GoogleDataLossPreventionDiscoveryConfig#other_tables}
  */
  readonly otherTables?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetFilterOtherTables;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#tables GoogleDataLossPreventionDiscoveryConfig#tables}
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
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._otherTables.internalValue = value.otherTables;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#cadence GoogleDataLossPreventionDiscoveryConfig#cadence}
  */
  readonly cadence?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetCadence;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#conditions GoogleDataLossPreventionDiscoveryConfig#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetConditions;
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#disabled GoogleDataLossPreventionDiscoveryConfig#disabled}
  */
  readonly disabled?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetDisabled;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#filter GoogleDataLossPreventionDiscoveryConfig#filter}
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
export interface GoogleDataLossPreventionDiscoveryConfigTargets {
  /**
  * big_query_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#big_query_target GoogleDataLossPreventionDiscoveryConfig#big_query_target}
  */
  readonly bigQueryTarget?: GoogleDataLossPreventionDiscoveryConfigTargetsBigQueryTarget;
}

export function googleDataLossPreventionDiscoveryConfigTargetsToTerraform(struct?: GoogleDataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    big_query_target: googleDataLossPreventionDiscoveryConfigTargetsBigQueryTargetToTerraform(struct!.bigQueryTarget),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDiscoveryConfigTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bigQueryTarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bigQueryTarget.internalValue = value.bigQueryTarget;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#create GoogleDataLossPreventionDiscoveryConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#delete GoogleDataLossPreventionDiscoveryConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#update GoogleDataLossPreventionDiscoveryConfig#update}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config google_data_loss_prevention_discovery_config}
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
  * @param importFromId The id of the existing GoogleDataLossPreventionDiscoveryConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataLossPreventionDiscoveryConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_loss_prevention_discovery_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.28.0/docs/resources/google_data_loss_prevention_discovery_config google_data_loss_prevention_discovery_config} Resource
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
        providerVersion: '5.28.0',
        providerVersionConstraint: '~> 5.0'
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
