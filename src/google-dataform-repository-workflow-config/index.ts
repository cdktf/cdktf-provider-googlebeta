/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataformRepositoryWorkflowConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#cron_schedule GoogleDataformRepositoryWorkflowConfig#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#id GoogleDataformRepositoryWorkflowConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The workflow's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#name GoogleDataformRepositoryWorkflowConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#project GoogleDataformRepositoryWorkflowConfig#project}
  */
  readonly project?: string;
  /**
  * A reference to the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#region GoogleDataformRepositoryWorkflowConfig#region}
  */
  readonly region?: string;
  /**
  * The name of the release config whose releaseCompilationResult should be executed. Must be in the format projects/* /locations/* /repositories/* /releaseConfigs/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#release_config GoogleDataformRepositoryWorkflowConfig#release_config}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly releaseConfig: string;
  /**
  * A reference to the Dataform repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#repository GoogleDataformRepositoryWorkflowConfig#repository}
  */
  readonly repository?: string;
  /**
  * Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#time_zone GoogleDataformRepositoryWorkflowConfig#time_zone}
  */
  readonly timeZone?: string;
  /**
  * invocation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#invocation_config GoogleDataformRepositoryWorkflowConfig#invocation_config}
  */
  readonly invocationConfig?: GoogleDataformRepositoryWorkflowConfigInvocationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#timeouts GoogleDataformRepositoryWorkflowConfig#timeouts}
  */
  readonly timeouts?: GoogleDataformRepositoryWorkflowConfigTimeouts;
}
export interface GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus {
}

export function googleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusToTerraform(struct?: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusToHclTerraform(struct?: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatus | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference {
    return new GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords {
}

export function googleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsToTerraform(struct?: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsToHclTerraform(struct?: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_status - computed: true, optional: false, required: false
  private _errorStatus = new GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsErrorStatusList(this, "error_status", false);
  public get errorStatus() {
    return this._errorStatus;
  }

  // execution_time - computed: true, optional: false, required: false
  public get executionTime() {
    return this.getStringAttribute('execution_time');
  }

  // workflow_invocation - computed: true, optional: false, required: false
  public get workflowInvocation() {
    return this.getStringAttribute('workflow_invocation');
  }
}

export class GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference {
    return new GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets {
  /**
  * The action's database (Google Cloud project ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#database GoogleDataformRepositoryWorkflowConfig#database}
  */
  readonly database?: string;
  /**
  * The action's name, within database and schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#name GoogleDataformRepositoryWorkflowConfig#name}
  */
  readonly name?: string;
  /**
  * The action's schema (BigQuery dataset ID), within database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#schema GoogleDataformRepositoryWorkflowConfig#schema}
  */
  readonly schema?: string;
}

export function googleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsToTerraform(struct?: GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function googleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsToHclTerraform(struct?: GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._name = undefined;
      this._schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._name = value.name;
      this._schema = value.schema;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}

export class GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference {
    return new GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataformRepositoryWorkflowConfigInvocationConfig {
  /**
  * Optional. When set to true, any incremental tables will be fully refreshed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#fully_refresh_incremental_tables_enabled GoogleDataformRepositoryWorkflowConfig#fully_refresh_incremental_tables_enabled}
  */
  readonly fullyRefreshIncrementalTablesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. The set of tags to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#included_tags GoogleDataformRepositoryWorkflowConfig#included_tags}
  */
  readonly includedTags?: string[];
  /**
  * Optional. The service account to run workflow invocations under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#service_account GoogleDataformRepositoryWorkflowConfig#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Optional. When set to true, transitive dependencies of included actions will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#transitive_dependencies_included GoogleDataformRepositoryWorkflowConfig#transitive_dependencies_included}
  */
  readonly transitiveDependenciesIncluded?: boolean | cdktf.IResolvable;
  /**
  * Optional. When set to true, transitive dependents of included actions will be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#transitive_dependents_included GoogleDataformRepositoryWorkflowConfig#transitive_dependents_included}
  */
  readonly transitiveDependentsIncluded?: boolean | cdktf.IResolvable;
  /**
  * included_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#included_targets GoogleDataformRepositoryWorkflowConfig#included_targets}
  */
  readonly includedTargets?: GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[] | cdktf.IResolvable;
}

export function googleDataformRepositoryWorkflowConfigInvocationConfigToTerraform(struct?: GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference | GoogleDataformRepositoryWorkflowConfigInvocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fully_refresh_incremental_tables_enabled: cdktf.booleanToTerraform(struct!.fullyRefreshIncrementalTablesEnabled),
    included_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedTags),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    transitive_dependencies_included: cdktf.booleanToTerraform(struct!.transitiveDependenciesIncluded),
    transitive_dependents_included: cdktf.booleanToTerraform(struct!.transitiveDependentsIncluded),
    included_targets: cdktf.listMapper(googleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsToTerraform, true)(struct!.includedTargets),
  }
}


export function googleDataformRepositoryWorkflowConfigInvocationConfigToHclTerraform(struct?: GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference | GoogleDataformRepositoryWorkflowConfigInvocationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fully_refresh_incremental_tables_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fullyRefreshIncrementalTablesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transitive_dependencies_included: {
      value: cdktf.booleanToHclTerraform(struct!.transitiveDependenciesIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transitive_dependents_included: {
      value: cdktf.booleanToHclTerraform(struct!.transitiveDependentsIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_targets: {
      value: cdktf.listMapperHcl(googleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsToHclTerraform, true)(struct!.includedTargets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataformRepositoryWorkflowConfigInvocationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullyRefreshIncrementalTablesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullyRefreshIncrementalTablesEnabled = this._fullyRefreshIncrementalTablesEnabled;
    }
    if (this._includedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedTags = this._includedTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._transitiveDependenciesIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitiveDependenciesIncluded = this._transitiveDependenciesIncluded;
    }
    if (this._transitiveDependentsIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitiveDependentsIncluded = this._transitiveDependentsIncluded;
    }
    if (this._includedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedTargets = this._includedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryWorkflowConfigInvocationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullyRefreshIncrementalTablesEnabled = undefined;
      this._includedTags = undefined;
      this._serviceAccount = undefined;
      this._transitiveDependenciesIncluded = undefined;
      this._transitiveDependentsIncluded = undefined;
      this._includedTargets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullyRefreshIncrementalTablesEnabled = value.fullyRefreshIncrementalTablesEnabled;
      this._includedTags = value.includedTags;
      this._serviceAccount = value.serviceAccount;
      this._transitiveDependenciesIncluded = value.transitiveDependenciesIncluded;
      this._transitiveDependentsIncluded = value.transitiveDependentsIncluded;
      this._includedTargets.internalValue = value.includedTargets;
    }
  }

  // fully_refresh_incremental_tables_enabled - computed: false, optional: true, required: false
  private _fullyRefreshIncrementalTablesEnabled?: boolean | cdktf.IResolvable; 
  public get fullyRefreshIncrementalTablesEnabled() {
    return this.getBooleanAttribute('fully_refresh_incremental_tables_enabled');
  }
  public set fullyRefreshIncrementalTablesEnabled(value: boolean | cdktf.IResolvable) {
    this._fullyRefreshIncrementalTablesEnabled = value;
  }
  public resetFullyRefreshIncrementalTablesEnabled() {
    this._fullyRefreshIncrementalTablesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyRefreshIncrementalTablesEnabledInput() {
    return this._fullyRefreshIncrementalTablesEnabled;
  }

  // included_tags - computed: false, optional: true, required: false
  private _includedTags?: string[]; 
  public get includedTags() {
    return this.getListAttribute('included_tags');
  }
  public set includedTags(value: string[]) {
    this._includedTags = value;
  }
  public resetIncludedTags() {
    this._includedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedTagsInput() {
    return this._includedTags;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // transitive_dependencies_included - computed: false, optional: true, required: false
  private _transitiveDependenciesIncluded?: boolean | cdktf.IResolvable; 
  public get transitiveDependenciesIncluded() {
    return this.getBooleanAttribute('transitive_dependencies_included');
  }
  public set transitiveDependenciesIncluded(value: boolean | cdktf.IResolvable) {
    this._transitiveDependenciesIncluded = value;
  }
  public resetTransitiveDependenciesIncluded() {
    this._transitiveDependenciesIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitiveDependenciesIncludedInput() {
    return this._transitiveDependenciesIncluded;
  }

  // transitive_dependents_included - computed: false, optional: true, required: false
  private _transitiveDependentsIncluded?: boolean | cdktf.IResolvable; 
  public get transitiveDependentsIncluded() {
    return this.getBooleanAttribute('transitive_dependents_included');
  }
  public set transitiveDependentsIncluded(value: boolean | cdktf.IResolvable) {
    this._transitiveDependentsIncluded = value;
  }
  public resetTransitiveDependentsIncluded() {
    this._transitiveDependentsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitiveDependentsIncludedInput() {
    return this._transitiveDependentsIncluded;
  }

  // included_targets - computed: false, optional: true, required: false
  private _includedTargets = new GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargetsList(this, "included_targets", false);
  public get includedTargets() {
    return this._includedTargets;
  }
  public putIncludedTargets(value: GoogleDataformRepositoryWorkflowConfigInvocationConfigIncludedTargets[] | cdktf.IResolvable) {
    this._includedTargets.internalValue = value;
  }
  public resetIncludedTargets() {
    this._includedTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedTargetsInput() {
    return this._includedTargets.internalValue;
  }
}
export interface GoogleDataformRepositoryWorkflowConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#create GoogleDataformRepositoryWorkflowConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#delete GoogleDataformRepositoryWorkflowConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#update GoogleDataformRepositoryWorkflowConfig#update}
  */
  readonly update?: string;
}

export function googleDataformRepositoryWorkflowConfigTimeoutsToTerraform(struct?: GoogleDataformRepositoryWorkflowConfigTimeouts | cdktf.IResolvable): any {
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


export function googleDataformRepositoryWorkflowConfigTimeoutsToHclTerraform(struct?: GoogleDataformRepositoryWorkflowConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataformRepositoryWorkflowConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataformRepositoryWorkflowConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config google_dataform_repository_workflow_config}
*/
export class GoogleDataformRepositoryWorkflowConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataform_repository_workflow_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataformRepositoryWorkflowConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataformRepositoryWorkflowConfig to import
  * @param importFromId The id of the existing GoogleDataformRepositoryWorkflowConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataformRepositoryWorkflowConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataform_repository_workflow_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_dataform_repository_workflow_config google_dataform_repository_workflow_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataformRepositoryWorkflowConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataformRepositoryWorkflowConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataform_repository_workflow_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.22.0',
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
    this._cronSchedule = config.cronSchedule;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._releaseConfig = config.releaseConfig;
    this._repository = config.repository;
    this._timeZone = config.timeZone;
    this._invocationConfig.internalValue = config.invocationConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_schedule - computed: false, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
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

  // recent_scheduled_execution_records - computed: true, optional: false, required: false
  private _recentScheduledExecutionRecords = new GoogleDataformRepositoryWorkflowConfigRecentScheduledExecutionRecordsList(this, "recent_scheduled_execution_records", false);
  public get recentScheduledExecutionRecords() {
    return this._recentScheduledExecutionRecords;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // release_config - computed: false, optional: false, required: true
  private _releaseConfig?: string; 
  public get releaseConfig() {
    return this.getStringAttribute('release_config');
  }
  public set releaseConfig(value: string) {
    this._releaseConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseConfigInput() {
    return this._releaseConfig;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // invocation_config - computed: false, optional: true, required: false
  private _invocationConfig = new GoogleDataformRepositoryWorkflowConfigInvocationConfigOutputReference(this, "invocation_config");
  public get invocationConfig() {
    return this._invocationConfig;
  }
  public putInvocationConfig(value: GoogleDataformRepositoryWorkflowConfigInvocationConfig) {
    this._invocationConfig.internalValue = value;
  }
  public resetInvocationConfig() {
    this._invocationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationConfigInput() {
    return this._invocationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataformRepositoryWorkflowConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataformRepositoryWorkflowConfigTimeouts) {
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
      cron_schedule: cdktf.stringToTerraform(this._cronSchedule),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      release_config: cdktf.stringToTerraform(this._releaseConfig),
      repository: cdktf.stringToTerraform(this._repository),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      invocation_config: googleDataformRepositoryWorkflowConfigInvocationConfigToTerraform(this._invocationConfig.internalValue),
      timeouts: googleDataformRepositoryWorkflowConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_schedule: {
        value: cdktf.stringToHclTerraform(this._cronSchedule),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_config: {
        value: cdktf.stringToHclTerraform(this._releaseConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invocation_config: {
        value: googleDataformRepositoryWorkflowConfigInvocationConfigToHclTerraform(this._invocationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataformRepositoryWorkflowConfigInvocationConfigList",
      },
      timeouts: {
        value: googleDataformRepositoryWorkflowConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataformRepositoryWorkflowConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
