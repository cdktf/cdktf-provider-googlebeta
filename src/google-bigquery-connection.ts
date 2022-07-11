// https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional connection id that should be assigned to the created connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#connection_id GoogleBigqueryConnection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * A descriptive description for the connection
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#description GoogleBigqueryConnection#description}
  */
  readonly description?: string;
  /**
  * A descriptive name for the connection
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#friendly_name GoogleBigqueryConnection#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#id GoogleBigqueryConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The geographic location where the connection should reside.
Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#location GoogleBigqueryConnection#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#project GoogleBigqueryConnection#project}
  */
  readonly project?: string;
  /**
  * aws block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#aws GoogleBigqueryConnection#aws}
  */
  readonly aws?: GoogleBigqueryConnectionAws;
  /**
  * azure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#azure GoogleBigqueryConnection#azure}
  */
  readonly azure?: GoogleBigqueryConnectionAzure;
  /**
  * cloud_resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#cloud_resource GoogleBigqueryConnection#cloud_resource}
  */
  readonly cloudResource?: GoogleBigqueryConnectionCloudResource;
  /**
  * cloud_spanner block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#cloud_spanner GoogleBigqueryConnection#cloud_spanner}
  */
  readonly cloudSpanner?: GoogleBigqueryConnectionCloudSpanner;
  /**
  * cloud_sql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#cloud_sql GoogleBigqueryConnection#cloud_sql}
  */
  readonly cloudSql?: GoogleBigqueryConnectionCloudSql;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#timeouts GoogleBigqueryConnection#timeouts}
  */
  readonly timeouts?: GoogleBigqueryConnectionTimeouts;
}
export interface GoogleBigqueryConnectionAwsAccessRole {
  /**
  * The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#iam_role_id GoogleBigqueryConnection#iam_role_id}
  */
  readonly iamRoleId: string;
}

export function googleBigqueryConnectionAwsAccessRoleToTerraform(struct?: GoogleBigqueryConnectionAwsAccessRoleOutputReference | GoogleBigqueryConnectionAwsAccessRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role_id: cdktf.stringToTerraform(struct!.iamRoleId),
  }
}

export class GoogleBigqueryConnectionAwsAccessRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionAwsAccessRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleId = this._iamRoleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionAwsAccessRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamRoleId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamRoleId = value.iamRoleId;
    }
  }

  // iam_role_id - computed: false, optional: false, required: true
  private _iamRoleId?: string; 
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }
  public set iamRoleId(value: string) {
    this._iamRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleIdInput() {
    return this._iamRoleId;
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }
}
export interface GoogleBigqueryConnectionAws {
  /**
  * access_role block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#access_role GoogleBigqueryConnection#access_role}
  */
  readonly accessRole: GoogleBigqueryConnectionAwsAccessRole;
}

export function googleBigqueryConnectionAwsToTerraform(struct?: GoogleBigqueryConnectionAwsOutputReference | GoogleBigqueryConnectionAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_role: googleBigqueryConnectionAwsAccessRoleToTerraform(struct!.accessRole),
  }
}

export class GoogleBigqueryConnectionAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRole = this._accessRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRole.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRole.internalValue = value.accessRole;
    }
  }

  // access_role - computed: false, optional: false, required: true
  private _accessRole = new GoogleBigqueryConnectionAwsAccessRoleOutputReference(this, "access_role");
  public get accessRole() {
    return this._accessRole;
  }
  public putAccessRole(value: GoogleBigqueryConnectionAwsAccessRole) {
    this._accessRole.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleInput() {
    return this._accessRole.internalValue;
  }
}
export interface GoogleBigqueryConnectionAzure {
  /**
  * The id of customer's directory that host the data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#customer_tenant_id GoogleBigqueryConnection#customer_tenant_id}
  */
  readonly customerTenantId: string;
}

export function googleBigqueryConnectionAzureToTerraform(struct?: GoogleBigqueryConnectionAzureOutputReference | GoogleBigqueryConnectionAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_tenant_id: cdktf.stringToTerraform(struct!.customerTenantId),
  }
}

export class GoogleBigqueryConnectionAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerTenantId = this._customerTenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerTenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerTenantId = value.customerTenantId;
    }
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // customer_tenant_id - computed: false, optional: false, required: true
  private _customerTenantId?: string; 
  public get customerTenantId() {
    return this.getStringAttribute('customer_tenant_id');
  }
  public set customerTenantId(value: string) {
    this._customerTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerTenantIdInput() {
    return this._customerTenantId;
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface GoogleBigqueryConnectionCloudResource {
}

export function googleBigqueryConnectionCloudResourceToTerraform(struct?: GoogleBigqueryConnectionCloudResourceOutputReference | GoogleBigqueryConnectionCloudResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleBigqueryConnectionCloudResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionCloudResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionCloudResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}
export interface GoogleBigqueryConnectionCloudSpanner {
  /**
  * Cloud Spanner database in the form 'project/instance/database'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#database GoogleBigqueryConnection#database}
  */
  readonly database: string;
  /**
  * If parallelism should be used when reading from Cloud Spanner
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#use_parallelism GoogleBigqueryConnection#use_parallelism}
  */
  readonly useParallelism?: boolean | cdktf.IResolvable;
}

export function googleBigqueryConnectionCloudSpannerToTerraform(struct?: GoogleBigqueryConnectionCloudSpannerOutputReference | GoogleBigqueryConnectionCloudSpanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    use_parallelism: cdktf.booleanToTerraform(struct!.useParallelism),
  }
}

export class GoogleBigqueryConnectionCloudSpannerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionCloudSpanner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._useParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.useParallelism = this._useParallelism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionCloudSpanner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._useParallelism = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._useParallelism = value.useParallelism;
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

  // use_parallelism - computed: false, optional: true, required: false
  private _useParallelism?: boolean | cdktf.IResolvable; 
  public get useParallelism() {
    return this.getBooleanAttribute('use_parallelism');
  }
  public set useParallelism(value: boolean | cdktf.IResolvable) {
    this._useParallelism = value;
  }
  public resetUseParallelism() {
    this._useParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useParallelismInput() {
    return this._useParallelism;
  }
}
export interface GoogleBigqueryConnectionCloudSqlCredential {
  /**
  * Password for database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#password GoogleBigqueryConnection#password}
  */
  readonly password: string;
  /**
  * Username for database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#username GoogleBigqueryConnection#username}
  */
  readonly username: string;
}

export function googleBigqueryConnectionCloudSqlCredentialToTerraform(struct?: GoogleBigqueryConnectionCloudSqlCredentialOutputReference | GoogleBigqueryConnectionCloudSqlCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class GoogleBigqueryConnectionCloudSqlCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionCloudSqlCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionCloudSqlCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GoogleBigqueryConnectionCloudSql {
  /**
  * Database name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#database GoogleBigqueryConnection#database}
  */
  readonly database: string;
  /**
  * Cloud SQL instance ID in the form project:location:instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#instance_id GoogleBigqueryConnection#instance_id}
  */
  readonly instanceId: string;
  /**
  * Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#type GoogleBigqueryConnection#type}
  */
  readonly type: string;
  /**
  * credential block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#credential GoogleBigqueryConnection#credential}
  */
  readonly credential: GoogleBigqueryConnectionCloudSqlCredential;
}

export function googleBigqueryConnectionCloudSqlToTerraform(struct?: GoogleBigqueryConnectionCloudSqlOutputReference | GoogleBigqueryConnectionCloudSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    type: cdktf.stringToTerraform(struct!.type),
    credential: googleBigqueryConnectionCloudSqlCredentialToTerraform(struct!.credential),
  }
}

export class GoogleBigqueryConnectionCloudSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionCloudSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryConnectionCloudSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._instanceId = undefined;
      this._type = undefined;
      this._credential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._instanceId = value.instanceId;
      this._type = value.type;
      this._credential.internalValue = value.credential;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new GoogleBigqueryConnectionCloudSqlCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: GoogleBigqueryConnectionCloudSqlCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }
}
export interface GoogleBigqueryConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#create GoogleBigqueryConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#delete GoogleBigqueryConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection#update GoogleBigqueryConnection#update}
  */
  readonly update?: string;
}

export function googleBigqueryConnectionTimeoutsToTerraform(struct?: GoogleBigqueryConnectionTimeoutsOutputReference | GoogleBigqueryConnectionTimeouts | cdktf.IResolvable): any {
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

export class GoogleBigqueryConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBigqueryConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection google_bigquery_connection}
*/
export class GoogleBigqueryConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_connection google_bigquery_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_connection',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.28.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._cloudResource.internalValue = config.cloudResource;
    this._cloudSpanner.internalValue = config.cloudSpanner;
    this._cloudSql.internalValue = config.cloudSql;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // has_credential - computed: true, optional: false, required: false
  public get hasCredential() {
    return this.getBooleanAttribute('has_credential');
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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

  // aws - computed: false, optional: true, required: false
  private _aws = new GoogleBigqueryConnectionAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: GoogleBigqueryConnectionAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new GoogleBigqueryConnectionAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: GoogleBigqueryConnectionAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // cloud_resource - computed: false, optional: true, required: false
  private _cloudResource = new GoogleBigqueryConnectionCloudResourceOutputReference(this, "cloud_resource");
  public get cloudResource() {
    return this._cloudResource;
  }
  public putCloudResource(value: GoogleBigqueryConnectionCloudResource) {
    this._cloudResource.internalValue = value;
  }
  public resetCloudResource() {
    this._cloudResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourceInput() {
    return this._cloudResource.internalValue;
  }

  // cloud_spanner - computed: false, optional: true, required: false
  private _cloudSpanner = new GoogleBigqueryConnectionCloudSpannerOutputReference(this, "cloud_spanner");
  public get cloudSpanner() {
    return this._cloudSpanner;
  }
  public putCloudSpanner(value: GoogleBigqueryConnectionCloudSpanner) {
    this._cloudSpanner.internalValue = value;
  }
  public resetCloudSpanner() {
    this._cloudSpanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSpannerInput() {
    return this._cloudSpanner.internalValue;
  }

  // cloud_sql - computed: false, optional: true, required: false
  private _cloudSql = new GoogleBigqueryConnectionCloudSqlOutputReference(this, "cloud_sql");
  public get cloudSql() {
    return this._cloudSql;
  }
  public putCloudSql(value: GoogleBigqueryConnectionCloudSql) {
    this._cloudSql.internalValue = value;
  }
  public resetCloudSql() {
    this._cloudSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlInput() {
    return this._cloudSql.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigqueryConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigqueryConnectionTimeouts) {
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
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      aws: googleBigqueryConnectionAwsToTerraform(this._aws.internalValue),
      azure: googleBigqueryConnectionAzureToTerraform(this._azure.internalValue),
      cloud_resource: googleBigqueryConnectionCloudResourceToTerraform(this._cloudResource.internalValue),
      cloud_spanner: googleBigqueryConnectionCloudSpannerToTerraform(this._cloudSpanner.internalValue),
      cloud_sql: googleBigqueryConnectionCloudSqlToTerraform(this._cloudSql.internalValue),
      timeouts: googleBigqueryConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
