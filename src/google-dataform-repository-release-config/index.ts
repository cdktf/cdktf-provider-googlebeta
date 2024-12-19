// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataformRepositoryReleaseConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#cron_schedule GoogleDataformRepositoryReleaseConfig#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#git_commitish GoogleDataformRepositoryReleaseConfig#git_commitish}
  */
  readonly gitCommitish: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#id GoogleDataformRepositoryReleaseConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The release's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#name GoogleDataformRepositoryReleaseConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#project GoogleDataformRepositoryReleaseConfig#project}
  */
  readonly project?: string;
  /**
  * A reference to the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#region GoogleDataformRepositoryReleaseConfig#region}
  */
  readonly region?: string;
  /**
  * A reference to the Dataform repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#repository GoogleDataformRepositoryReleaseConfig#repository}
  */
  readonly repository?: string;
  /**
  * Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#time_zone GoogleDataformRepositoryReleaseConfig#time_zone}
  */
  readonly timeZone?: string;
  /**
  * code_compilation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#code_compilation_config GoogleDataformRepositoryReleaseConfig#code_compilation_config}
  */
  readonly codeCompilationConfig?: GoogleDataformRepositoryReleaseConfigCodeCompilationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#timeouts GoogleDataformRepositoryReleaseConfig#timeouts}
  */
  readonly timeouts?: GoogleDataformRepositoryReleaseConfigTimeouts;
}
export interface GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus {
}

export function googleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusToTerraform(struct?: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusToHclTerraform(struct?: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus | undefined) {
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

export class GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference {
    return new GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords {
}

export function googleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsToTerraform(struct?: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsToHclTerraform(struct?: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compilation_result - computed: true, optional: false, required: false
  public get compilationResult() {
    return this.getStringAttribute('compilation_result');
  }

  // error_status - computed: true, optional: false, required: false
  private _errorStatus = new GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList(this, "error_status", false);
  public get errorStatus() {
    return this._errorStatus;
  }

  // release_time - computed: true, optional: false, required: false
  public get releaseTime() {
    return this.getStringAttribute('release_time');
  }
}

export class GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference {
    return new GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataformRepositoryReleaseConfigCodeCompilationConfig {
  /**
  * Optional. The default schema (BigQuery dataset ID) for assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#assertion_schema GoogleDataformRepositoryReleaseConfig#assertion_schema}
  */
  readonly assertionSchema?: string;
  /**
  * Optional. The suffix that should be appended to all database (Google Cloud project ID) names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#database_suffix GoogleDataformRepositoryReleaseConfig#database_suffix}
  */
  readonly databaseSuffix?: string;
  /**
  * Optional. The default database (Google Cloud project ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#default_database GoogleDataformRepositoryReleaseConfig#default_database}
  */
  readonly defaultDatabase?: string;
  /**
  * Optional. The default BigQuery location to use. Defaults to "US".
  * See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#default_location GoogleDataformRepositoryReleaseConfig#default_location}
  */
  readonly defaultLocation?: string;
  /**
  * Optional. The default schema (BigQuery dataset ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#default_schema GoogleDataformRepositoryReleaseConfig#default_schema}
  */
  readonly defaultSchema?: string;
  /**
  * Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#schema_suffix GoogleDataformRepositoryReleaseConfig#schema_suffix}
  */
  readonly schemaSuffix?: string;
  /**
  * Optional. The prefix that should be prepended to all table names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#table_prefix GoogleDataformRepositoryReleaseConfig#table_prefix}
  */
  readonly tablePrefix?: string;
  /**
  * Optional. User-defined variables that are made available to project code during compilation.
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#vars GoogleDataformRepositoryReleaseConfig#vars}
  */
  readonly vars?: { [key: string]: string };
}

export function googleDataformRepositoryReleaseConfigCodeCompilationConfigToTerraform(struct?: GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference | GoogleDataformRepositoryReleaseConfigCodeCompilationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assertion_schema: cdktf.stringToTerraform(struct!.assertionSchema),
    database_suffix: cdktf.stringToTerraform(struct!.databaseSuffix),
    default_database: cdktf.stringToTerraform(struct!.defaultDatabase),
    default_location: cdktf.stringToTerraform(struct!.defaultLocation),
    default_schema: cdktf.stringToTerraform(struct!.defaultSchema),
    schema_suffix: cdktf.stringToTerraform(struct!.schemaSuffix),
    table_prefix: cdktf.stringToTerraform(struct!.tablePrefix),
    vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vars),
  }
}


export function googleDataformRepositoryReleaseConfigCodeCompilationConfigToHclTerraform(struct?: GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference | GoogleDataformRepositoryReleaseConfigCodeCompilationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assertion_schema: {
      value: cdktf.stringToHclTerraform(struct!.assertionSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_suffix: {
      value: cdktf.stringToHclTerraform(struct!.databaseSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_database: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_location: {
      value: cdktf.stringToHclTerraform(struct!.defaultLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_schema: {
      value: cdktf.stringToHclTerraform(struct!.defaultSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_suffix: {
      value: cdktf.stringToHclTerraform(struct!.schemaSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataformRepositoryReleaseConfigCodeCompilationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assertionSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionSchema = this._assertionSchema;
    }
    if (this._databaseSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSuffix = this._databaseSuffix;
    }
    if (this._defaultDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatabase = this._defaultDatabase;
    }
    if (this._defaultLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLocation = this._defaultLocation;
    }
    if (this._defaultSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSchema = this._defaultSchema;
    }
    if (this._schemaSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaSuffix = this._schemaSuffix;
    }
    if (this._tablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrefix = this._tablePrefix;
    }
    if (this._vars !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataformRepositoryReleaseConfigCodeCompilationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assertionSchema = undefined;
      this._databaseSuffix = undefined;
      this._defaultDatabase = undefined;
      this._defaultLocation = undefined;
      this._defaultSchema = undefined;
      this._schemaSuffix = undefined;
      this._tablePrefix = undefined;
      this._vars = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assertionSchema = value.assertionSchema;
      this._databaseSuffix = value.databaseSuffix;
      this._defaultDatabase = value.defaultDatabase;
      this._defaultLocation = value.defaultLocation;
      this._defaultSchema = value.defaultSchema;
      this._schemaSuffix = value.schemaSuffix;
      this._tablePrefix = value.tablePrefix;
      this._vars = value.vars;
    }
  }

  // assertion_schema - computed: false, optional: true, required: false
  private _assertionSchema?: string; 
  public get assertionSchema() {
    return this.getStringAttribute('assertion_schema');
  }
  public set assertionSchema(value: string) {
    this._assertionSchema = value;
  }
  public resetAssertionSchema() {
    this._assertionSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionSchemaInput() {
    return this._assertionSchema;
  }

  // database_suffix - computed: false, optional: true, required: false
  private _databaseSuffix?: string; 
  public get databaseSuffix() {
    return this.getStringAttribute('database_suffix');
  }
  public set databaseSuffix(value: string) {
    this._databaseSuffix = value;
  }
  public resetDatabaseSuffix() {
    this._databaseSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSuffixInput() {
    return this._databaseSuffix;
  }

  // default_database - computed: false, optional: true, required: false
  private _defaultDatabase?: string; 
  public get defaultDatabase() {
    return this.getStringAttribute('default_database');
  }
  public set defaultDatabase(value: string) {
    this._defaultDatabase = value;
  }
  public resetDefaultDatabase() {
    this._defaultDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatabaseInput() {
    return this._defaultDatabase;
  }

  // default_location - computed: false, optional: true, required: false
  private _defaultLocation?: string; 
  public get defaultLocation() {
    return this.getStringAttribute('default_location');
  }
  public set defaultLocation(value: string) {
    this._defaultLocation = value;
  }
  public resetDefaultLocation() {
    this._defaultLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocationInput() {
    return this._defaultLocation;
  }

  // default_schema - computed: false, optional: true, required: false
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
  }
  public resetDefaultSchema() {
    this._defaultSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaInput() {
    return this._defaultSchema;
  }

  // schema_suffix - computed: false, optional: true, required: false
  private _schemaSuffix?: string; 
  public get schemaSuffix() {
    return this.getStringAttribute('schema_suffix');
  }
  public set schemaSuffix(value: string) {
    this._schemaSuffix = value;
  }
  public resetSchemaSuffix() {
    this._schemaSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSuffixInput() {
    return this._schemaSuffix;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  public resetTablePrefix() {
    this._tablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }
}
export interface GoogleDataformRepositoryReleaseConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#create GoogleDataformRepositoryReleaseConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#delete GoogleDataformRepositoryReleaseConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#update GoogleDataformRepositoryReleaseConfig#update}
  */
  readonly update?: string;
}

export function googleDataformRepositoryReleaseConfigTimeoutsToTerraform(struct?: GoogleDataformRepositoryReleaseConfigTimeouts | cdktf.IResolvable): any {
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


export function googleDataformRepositoryReleaseConfigTimeoutsToHclTerraform(struct?: GoogleDataformRepositoryReleaseConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataformRepositoryReleaseConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataformRepositoryReleaseConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config google_dataform_repository_release_config}
*/
export class GoogleDataformRepositoryReleaseConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataform_repository_release_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataformRepositoryReleaseConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataformRepositoryReleaseConfig to import
  * @param importFromId The id of the existing GoogleDataformRepositoryReleaseConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataformRepositoryReleaseConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataform_repository_release_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataform_repository_release_config google_dataform_repository_release_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataformRepositoryReleaseConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataformRepositoryReleaseConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataform_repository_release_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.14.1',
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
    this._gitCommitish = config.gitCommitish;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._repository = config.repository;
    this._timeZone = config.timeZone;
    this._codeCompilationConfig.internalValue = config.codeCompilationConfig;
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

  // git_commitish - computed: false, optional: false, required: true
  private _gitCommitish?: string; 
  public get gitCommitish() {
    return this.getStringAttribute('git_commitish');
  }
  public set gitCommitish(value: string) {
    this._gitCommitish = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCommitishInput() {
    return this._gitCommitish;
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

  // recent_scheduled_release_records - computed: true, optional: false, required: false
  private _recentScheduledReleaseRecords = new GoogleDataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList(this, "recent_scheduled_release_records", false);
  public get recentScheduledReleaseRecords() {
    return this._recentScheduledReleaseRecords;
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

  // code_compilation_config - computed: false, optional: true, required: false
  private _codeCompilationConfig = new GoogleDataformRepositoryReleaseConfigCodeCompilationConfigOutputReference(this, "code_compilation_config");
  public get codeCompilationConfig() {
    return this._codeCompilationConfig;
  }
  public putCodeCompilationConfig(value: GoogleDataformRepositoryReleaseConfigCodeCompilationConfig) {
    this._codeCompilationConfig.internalValue = value;
  }
  public resetCodeCompilationConfig() {
    this._codeCompilationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeCompilationConfigInput() {
    return this._codeCompilationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataformRepositoryReleaseConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataformRepositoryReleaseConfigTimeouts) {
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
      git_commitish: cdktf.stringToTerraform(this._gitCommitish),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      repository: cdktf.stringToTerraform(this._repository),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      code_compilation_config: googleDataformRepositoryReleaseConfigCodeCompilationConfigToTerraform(this._codeCompilationConfig.internalValue),
      timeouts: googleDataformRepositoryReleaseConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      git_commitish: {
        value: cdktf.stringToHclTerraform(this._gitCommitish),
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
      code_compilation_config: {
        value: googleDataformRepositoryReleaseConfigCodeCompilationConfigToHclTerraform(this._codeCompilationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataformRepositoryReleaseConfigCodeCompilationConfigList",
      },
      timeouts: {
        value: googleDataformRepositoryReleaseConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataformRepositoryReleaseConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
