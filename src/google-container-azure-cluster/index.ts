// https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleContainerAzureClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field `effective_annotations` for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#annotations GoogleContainerAzureCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#azure_region GoogleContainerAzureCluster#azure_region}
  */
  readonly azureRegion: string;
  /**
  * Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#client GoogleContainerAzureCluster#client}
  */
  readonly client?: string;
  /**
  * Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#description GoogleContainerAzureCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#id GoogleContainerAzureCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#location GoogleContainerAzureCluster#location}
  */
  readonly location: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#name GoogleContainerAzureCluster#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#project GoogleContainerAzureCluster#project}
  */
  readonly project?: string;
  /**
  * The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#resource_group_id GoogleContainerAzureCluster#resource_group_id}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly resourceGroupId: string;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#authorization GoogleContainerAzureCluster#authorization}
  */
  readonly authorization: GoogleContainerAzureClusterAuthorization;
  /**
  * azure_services_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#azure_services_authentication GoogleContainerAzureCluster#azure_services_authentication}
  */
  readonly azureServicesAuthentication?: GoogleContainerAzureClusterAzureServicesAuthentication;
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#control_plane GoogleContainerAzureCluster#control_plane}
  */
  readonly controlPlane: GoogleContainerAzureClusterControlPlane;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#fleet GoogleContainerAzureCluster#fleet}
  */
  readonly fleet: GoogleContainerAzureClusterFleet;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#logging_config GoogleContainerAzureCluster#logging_config}
  */
  readonly loggingConfig?: GoogleContainerAzureClusterLoggingConfig;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#networking GoogleContainerAzureCluster#networking}
  */
  readonly networking: GoogleContainerAzureClusterNetworking;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#timeouts GoogleContainerAzureCluster#timeouts}
  */
  readonly timeouts?: GoogleContainerAzureClusterTimeouts;
}
export interface GoogleContainerAzureClusterWorkloadIdentityConfig {
}

export function googleContainerAzureClusterWorkloadIdentityConfigToTerraform(struct?: GoogleContainerAzureClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerAzureClusterWorkloadIdentityConfigToHclTerraform(struct?: GoogleContainerAzureClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerAzureClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider - computed: true, optional: false, required: false
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }

  // issuer_uri - computed: true, optional: false, required: false
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }

  // workload_pool - computed: true, optional: false, required: false
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
}

export class GoogleContainerAzureClusterWorkloadIdentityConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference {
    return new GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerAzureClusterAuthorizationAdminGroups {
  /**
  * The name of the group, e.g. `my-group@domain.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#group GoogleContainerAzureCluster#group}
  */
  readonly group: string;
}

export function googleContainerAzureClusterAuthorizationAdminGroupsToTerraform(struct?: GoogleContainerAzureClusterAuthorizationAdminGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
  }
}


export function googleContainerAzureClusterAuthorizationAdminGroupsToHclTerraform(struct?: GoogleContainerAzureClusterAuthorizationAdminGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerAzureClusterAuthorizationAdminGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterAuthorizationAdminGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}

export class GoogleContainerAzureClusterAuthorizationAdminGroupsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerAzureClusterAuthorizationAdminGroups[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference {
    return new GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerAzureClusterAuthorizationAdminUsers {
  /**
  * The name of the user, e.g. `my-gcp-id@gmail.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#username GoogleContainerAzureCluster#username}
  */
  readonly username: string;
}

export function googleContainerAzureClusterAuthorizationAdminUsersToTerraform(struct?: GoogleContainerAzureClusterAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleContainerAzureClusterAuthorizationAdminUsersToHclTerraform(struct?: GoogleContainerAzureClusterAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerAzureClusterAuthorizationAdminUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterAuthorizationAdminUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._username = value.username;
    }
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

export class GoogleContainerAzureClusterAuthorizationAdminUsersList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerAzureClusterAuthorizationAdminUsers[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference {
    return new GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerAzureClusterAuthorization {
  /**
  * admin_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#admin_groups GoogleContainerAzureCluster#admin_groups}
  */
  readonly adminGroups?: GoogleContainerAzureClusterAuthorizationAdminGroups[] | cdktf.IResolvable;
  /**
  * admin_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#admin_users GoogleContainerAzureCluster#admin_users}
  */
  readonly adminUsers: GoogleContainerAzureClusterAuthorizationAdminUsers[] | cdktf.IResolvable;
}

export function googleContainerAzureClusterAuthorizationToTerraform(struct?: GoogleContainerAzureClusterAuthorizationOutputReference | GoogleContainerAzureClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_groups: cdktf.listMapper(googleContainerAzureClusterAuthorizationAdminGroupsToTerraform, true)(struct!.adminGroups),
    admin_users: cdktf.listMapper(googleContainerAzureClusterAuthorizationAdminUsersToTerraform, true)(struct!.adminUsers),
  }
}


export function googleContainerAzureClusterAuthorizationToHclTerraform(struct?: GoogleContainerAzureClusterAuthorizationOutputReference | GoogleContainerAzureClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_groups: {
      value: cdktf.listMapperHcl(googleContainerAzureClusterAuthorizationAdminGroupsToHclTerraform, true)(struct!.adminGroups),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterAuthorizationAdminGroupsList",
    },
    admin_users: {
      value: cdktf.listMapperHcl(googleContainerAzureClusterAuthorizationAdminUsersToHclTerraform, true)(struct!.adminUsers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterAuthorizationAdminUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroups = this._adminGroups?.internalValue;
    }
    if (this._adminUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminGroups.internalValue = undefined;
      this._adminUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminGroups.internalValue = value.adminGroups;
      this._adminUsers.internalValue = value.adminUsers;
    }
  }

  // admin_groups - computed: false, optional: true, required: false
  private _adminGroups = new GoogleContainerAzureClusterAuthorizationAdminGroupsList(this, "admin_groups", false);
  public get adminGroups() {
    return this._adminGroups;
  }
  public putAdminGroups(value: GoogleContainerAzureClusterAuthorizationAdminGroups[] | cdktf.IResolvable) {
    this._adminGroups.internalValue = value;
  }
  public resetAdminGroups() {
    this._adminGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupsInput() {
    return this._adminGroups.internalValue;
  }

  // admin_users - computed: false, optional: false, required: true
  private _adminUsers = new GoogleContainerAzureClusterAuthorizationAdminUsersList(this, "admin_users", false);
  public get adminUsers() {
    return this._adminUsers;
  }
  public putAdminUsers(value: GoogleContainerAzureClusterAuthorizationAdminUsers[] | cdktf.IResolvable) {
    this._adminUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers.internalValue;
  }
}
export interface GoogleContainerAzureClusterAzureServicesAuthentication {
  /**
  * The Azure Active Directory Application ID for Authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#application_id GoogleContainerAzureCluster#application_id}
  */
  readonly applicationId: string;
  /**
  * The Azure Active Directory Tenant ID for Authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#tenant_id GoogleContainerAzureCluster#tenant_id}
  */
  readonly tenantId: string;
}

export function googleContainerAzureClusterAzureServicesAuthenticationToTerraform(struct?: GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference | GoogleContainerAzureClusterAzureServicesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function googleContainerAzureClusterAzureServicesAuthenticationToHclTerraform(struct?: GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference | GoogleContainerAzureClusterAzureServicesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterAzureServicesAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterAzureServicesAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._tenantId = value.tenantId;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface GoogleContainerAzureClusterControlPlaneDatabaseEncryption {
  /**
  * The ARM ID of the Azure Key Vault key to encrypt / decrypt data. For example: `/subscriptions/<subscription-id>/resourceGroups/<resource-group-id>/providers/Microsoft.KeyVault/vaults/<key-vault-id>/keys/<key-name>` Encryption will always take the latest version of the key and hence specific version is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#key_id GoogleContainerAzureCluster#key_id}
  */
  readonly keyId: string;
}

export function googleContainerAzureClusterControlPlaneDatabaseEncryptionToTerraform(struct?: GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference | GoogleContainerAzureClusterControlPlaneDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function googleContainerAzureClusterControlPlaneDatabaseEncryptionToHclTerraform(struct?: GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference | GoogleContainerAzureClusterControlPlaneDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterControlPlaneDatabaseEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterControlPlaneDatabaseEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface GoogleContainerAzureClusterControlPlaneMainVolume {
  /**
  * Optional. The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#size_gib GoogleContainerAzureCluster#size_gib}
  */
  readonly sizeGib?: number;
}

export function googleContainerAzureClusterControlPlaneMainVolumeToTerraform(struct?: GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference | GoogleContainerAzureClusterControlPlaneMainVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
  }
}


export function googleContainerAzureClusterControlPlaneMainVolumeToHclTerraform(struct?: GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference | GoogleContainerAzureClusterControlPlaneMainVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_gib: {
      value: cdktf.numberToHclTerraform(struct!.sizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterControlPlaneMainVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterControlPlaneMainVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeGib = value.sizeGib;
    }
  }

  // size_gib - computed: true, optional: true, required: false
  private _sizeGib?: number; 
  public get sizeGib() {
    return this.getNumberAttribute('size_gib');
  }
  public set sizeGib(value: number) {
    this._sizeGib = value;
  }
  public resetSizeGib() {
    this._sizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGibInput() {
    return this._sizeGib;
  }
}
export interface GoogleContainerAzureClusterControlPlaneProxyConfig {
  /**
  * The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#resource_group_id GoogleContainerAzureCluster#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#secret_id GoogleContainerAzureCluster#secret_id}
  */
  readonly secretId: string;
}

export function googleContainerAzureClusterControlPlaneProxyConfigToTerraform(struct?: GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference | GoogleContainerAzureClusterControlPlaneProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_id: cdktf.stringToTerraform(struct!.resourceGroupId),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


export function googleContainerAzureClusterControlPlaneProxyConfigToHclTerraform(struct?: GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference | GoogleContainerAzureClusterControlPlaneProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterControlPlaneProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupId = this._resourceGroupId;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterControlPlaneProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupId = undefined;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupId = value.resourceGroupId;
      this._secretId = value.secretId;
    }
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface GoogleContainerAzureClusterControlPlaneReplicaPlacements {
  /**
  * For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#azure_availability_zone GoogleContainerAzureCluster#azure_availability_zone}
  */
  readonly azureAvailabilityZone: string;
  /**
  * For a given replica, the ARM ID of the subnet where the control plane VM is deployed. Make sure it's a subnet under the virtual network in the cluster configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#subnet_id GoogleContainerAzureCluster#subnet_id}
  */
  readonly subnetId: string;
}

export function googleContainerAzureClusterControlPlaneReplicaPlacementsToTerraform(struct?: GoogleContainerAzureClusterControlPlaneReplicaPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_availability_zone: cdktf.stringToTerraform(struct!.azureAvailabilityZone),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function googleContainerAzureClusterControlPlaneReplicaPlacementsToHclTerraform(struct?: GoogleContainerAzureClusterControlPlaneReplicaPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.azureAvailabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerAzureClusterControlPlaneReplicaPlacements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAvailabilityZone = this._azureAvailabilityZone;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterControlPlaneReplicaPlacements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureAvailabilityZone = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureAvailabilityZone = value.azureAvailabilityZone;
      this._subnetId = value.subnetId;
    }
  }

  // azure_availability_zone - computed: false, optional: false, required: true
  private _azureAvailabilityZone?: string; 
  public get azureAvailabilityZone() {
    return this.getStringAttribute('azure_availability_zone');
  }
  public set azureAvailabilityZone(value: string) {
    this._azureAvailabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAvailabilityZoneInput() {
    return this._azureAvailabilityZone;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class GoogleContainerAzureClusterControlPlaneReplicaPlacementsList extends cdktf.ComplexList {
  public internalValue? : GoogleContainerAzureClusterControlPlaneReplicaPlacements[] | cdktf.IResolvable

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
  public get(index: number): GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference {
    return new GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerAzureClusterControlPlaneRootVolume {
  /**
  * Optional. The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#size_gib GoogleContainerAzureCluster#size_gib}
  */
  readonly sizeGib?: number;
}

export function googleContainerAzureClusterControlPlaneRootVolumeToTerraform(struct?: GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference | GoogleContainerAzureClusterControlPlaneRootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
  }
}


export function googleContainerAzureClusterControlPlaneRootVolumeToHclTerraform(struct?: GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference | GoogleContainerAzureClusterControlPlaneRootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_gib: {
      value: cdktf.numberToHclTerraform(struct!.sizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterControlPlaneRootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterControlPlaneRootVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeGib = value.sizeGib;
    }
  }

  // size_gib - computed: true, optional: true, required: false
  private _sizeGib?: number; 
  public get sizeGib() {
    return this.getNumberAttribute('size_gib');
  }
  public set sizeGib(value: number) {
    this._sizeGib = value;
  }
  public resetSizeGib() {
    this._sizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGibInput() {
    return this._sizeGib;
  }
}
export interface GoogleContainerAzureClusterControlPlaneSshConfig {
  /**
  * The SSH public key data for VMs managed by Anthos. This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#authorized_key GoogleContainerAzureCluster#authorized_key}
  */
  readonly authorizedKey: string;
}

export function googleContainerAzureClusterControlPlaneSshConfigToTerraform(struct?: GoogleContainerAzureClusterControlPlaneSshConfigOutputReference | GoogleContainerAzureClusterControlPlaneSshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_key: cdktf.stringToTerraform(struct!.authorizedKey),
  }
}


export function googleContainerAzureClusterControlPlaneSshConfigToHclTerraform(struct?: GoogleContainerAzureClusterControlPlaneSshConfigOutputReference | GoogleContainerAzureClusterControlPlaneSshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_key: {
      value: cdktf.stringToHclTerraform(struct!.authorizedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterControlPlaneSshConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterControlPlaneSshConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKey = this._authorizedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterControlPlaneSshConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizedKey = value.authorizedKey;
    }
  }

  // authorized_key - computed: false, optional: false, required: true
  private _authorizedKey?: string; 
  public get authorizedKey() {
    return this.getStringAttribute('authorized_key');
  }
  public set authorizedKey(value: string) {
    this._authorizedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeyInput() {
    return this._authorizedKey;
  }
}
export interface GoogleContainerAzureClusterControlPlane {
  /**
  * The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#subnet_id GoogleContainerAzureCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Optional. A set of tags to apply to all underlying control plane Azure resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#tags GoogleContainerAzureCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#version GoogleContainerAzureCluster#version}
  */
  readonly version: string;
  /**
  * Optional. The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#vm_size GoogleContainerAzureCluster#vm_size}
  */
  readonly vmSize?: string;
  /**
  * database_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#database_encryption GoogleContainerAzureCluster#database_encryption}
  */
  readonly databaseEncryption?: GoogleContainerAzureClusterControlPlaneDatabaseEncryption;
  /**
  * main_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#main_volume GoogleContainerAzureCluster#main_volume}
  */
  readonly mainVolume?: GoogleContainerAzureClusterControlPlaneMainVolume;
  /**
  * proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#proxy_config GoogleContainerAzureCluster#proxy_config}
  */
  readonly proxyConfig?: GoogleContainerAzureClusterControlPlaneProxyConfig;
  /**
  * replica_placements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#replica_placements GoogleContainerAzureCluster#replica_placements}
  */
  readonly replicaPlacements?: GoogleContainerAzureClusterControlPlaneReplicaPlacements[] | cdktf.IResolvable;
  /**
  * root_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#root_volume GoogleContainerAzureCluster#root_volume}
  */
  readonly rootVolume?: GoogleContainerAzureClusterControlPlaneRootVolume;
  /**
  * ssh_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#ssh_config GoogleContainerAzureCluster#ssh_config}
  */
  readonly sshConfig: GoogleContainerAzureClusterControlPlaneSshConfig;
}

export function googleContainerAzureClusterControlPlaneToTerraform(struct?: GoogleContainerAzureClusterControlPlaneOutputReference | GoogleContainerAzureClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    version: cdktf.stringToTerraform(struct!.version),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    database_encryption: googleContainerAzureClusterControlPlaneDatabaseEncryptionToTerraform(struct!.databaseEncryption),
    main_volume: googleContainerAzureClusterControlPlaneMainVolumeToTerraform(struct!.mainVolume),
    proxy_config: googleContainerAzureClusterControlPlaneProxyConfigToTerraform(struct!.proxyConfig),
    replica_placements: cdktf.listMapper(googleContainerAzureClusterControlPlaneReplicaPlacementsToTerraform, true)(struct!.replicaPlacements),
    root_volume: googleContainerAzureClusterControlPlaneRootVolumeToTerraform(struct!.rootVolume),
    ssh_config: googleContainerAzureClusterControlPlaneSshConfigToTerraform(struct!.sshConfig),
  }
}


export function googleContainerAzureClusterControlPlaneToHclTerraform(struct?: GoogleContainerAzureClusterControlPlaneOutputReference | GoogleContainerAzureClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_encryption: {
      value: googleContainerAzureClusterControlPlaneDatabaseEncryptionToHclTerraform(struct!.databaseEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterControlPlaneDatabaseEncryptionList",
    },
    main_volume: {
      value: googleContainerAzureClusterControlPlaneMainVolumeToHclTerraform(struct!.mainVolume),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterControlPlaneMainVolumeList",
    },
    proxy_config: {
      value: googleContainerAzureClusterControlPlaneProxyConfigToHclTerraform(struct!.proxyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterControlPlaneProxyConfigList",
    },
    replica_placements: {
      value: cdktf.listMapperHcl(googleContainerAzureClusterControlPlaneReplicaPlacementsToHclTerraform, true)(struct!.replicaPlacements),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterControlPlaneReplicaPlacementsList",
    },
    root_volume: {
      value: googleContainerAzureClusterControlPlaneRootVolumeToHclTerraform(struct!.rootVolume),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterControlPlaneRootVolumeList",
    },
    ssh_config: {
      value: googleContainerAzureClusterControlPlaneSshConfigToHclTerraform(struct!.sshConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterControlPlaneSshConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._databaseEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseEncryption = this._databaseEncryption?.internalValue;
    }
    if (this._mainVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainVolume = this._mainVolume?.internalValue;
    }
    if (this._proxyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfig = this._proxyConfig?.internalValue;
    }
    if (this._replicaPlacements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaPlacements = this._replicaPlacements?.internalValue;
    }
    if (this._rootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolume = this._rootVolume?.internalValue;
    }
    if (this._sshConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshConfig = this._sshConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._tags = undefined;
      this._version = undefined;
      this._vmSize = undefined;
      this._databaseEncryption.internalValue = undefined;
      this._mainVolume.internalValue = undefined;
      this._proxyConfig.internalValue = undefined;
      this._replicaPlacements.internalValue = undefined;
      this._rootVolume.internalValue = undefined;
      this._sshConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._tags = value.tags;
      this._version = value.version;
      this._vmSize = value.vmSize;
      this._databaseEncryption.internalValue = value.databaseEncryption;
      this._mainVolume.internalValue = value.mainVolume;
      this._proxyConfig.internalValue = value.proxyConfig;
      this._replicaPlacements.internalValue = value.replicaPlacements;
      this._rootVolume.internalValue = value.rootVolume;
      this._sshConfig.internalValue = value.sshConfig;
    }
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vm_size - computed: true, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // database_encryption - computed: false, optional: true, required: false
  private _databaseEncryption = new GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference(this, "database_encryption");
  public get databaseEncryption() {
    return this._databaseEncryption;
  }
  public putDatabaseEncryption(value: GoogleContainerAzureClusterControlPlaneDatabaseEncryption) {
    this._databaseEncryption.internalValue = value;
  }
  public resetDatabaseEncryption() {
    this._databaseEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEncryptionInput() {
    return this._databaseEncryption.internalValue;
  }

  // main_volume - computed: false, optional: true, required: false
  private _mainVolume = new GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference(this, "main_volume");
  public get mainVolume() {
    return this._mainVolume;
  }
  public putMainVolume(value: GoogleContainerAzureClusterControlPlaneMainVolume) {
    this._mainVolume.internalValue = value;
  }
  public resetMainVolume() {
    this._mainVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainVolumeInput() {
    return this._mainVolume.internalValue;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: GoogleContainerAzureClusterControlPlaneProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // replica_placements - computed: false, optional: true, required: false
  private _replicaPlacements = new GoogleContainerAzureClusterControlPlaneReplicaPlacementsList(this, "replica_placements", false);
  public get replicaPlacements() {
    return this._replicaPlacements;
  }
  public putReplicaPlacements(value: GoogleContainerAzureClusterControlPlaneReplicaPlacements[] | cdktf.IResolvable) {
    this._replicaPlacements.internalValue = value;
  }
  public resetReplicaPlacements() {
    this._replicaPlacements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaPlacementsInput() {
    return this._replicaPlacements.internalValue;
  }

  // root_volume - computed: false, optional: true, required: false
  private _rootVolume = new GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: GoogleContainerAzureClusterControlPlaneRootVolume) {
    this._rootVolume.internalValue = value;
  }
  public resetRootVolume() {
    this._rootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }

  // ssh_config - computed: false, optional: false, required: true
  private _sshConfig = new GoogleContainerAzureClusterControlPlaneSshConfigOutputReference(this, "ssh_config");
  public get sshConfig() {
    return this._sshConfig;
  }
  public putSshConfig(value: GoogleContainerAzureClusterControlPlaneSshConfig) {
    this._sshConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshConfigInput() {
    return this._sshConfig.internalValue;
  }
}
export interface GoogleContainerAzureClusterFleet {
  /**
  * The number of the Fleet host project where this cluster will be registered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#project GoogleContainerAzureCluster#project}
  */
  readonly project?: string;
}

export function googleContainerAzureClusterFleetToTerraform(struct?: GoogleContainerAzureClusterFleetOutputReference | GoogleContainerAzureClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function googleContainerAzureClusterFleetToHclTerraform(struct?: GoogleContainerAzureClusterFleetOutputReference | GoogleContainerAzureClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
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
}
export interface GoogleContainerAzureClusterLoggingConfigComponentConfig {
  /**
  * Components of the logging configuration to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#enable_components GoogleContainerAzureCluster#enable_components}
  */
  readonly enableComponents?: string[];
}

export function googleContainerAzureClusterLoggingConfigComponentConfigToTerraform(struct?: GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference | GoogleContainerAzureClusterLoggingConfigComponentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
  }
}


export function googleContainerAzureClusterLoggingConfigComponentConfigToHclTerraform(struct?: GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference | GoogleContainerAzureClusterLoggingConfigComponentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterLoggingConfigComponentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterLoggingConfigComponentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
    }
  }

  // enable_components - computed: true, optional: true, required: false
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  public resetEnableComponents() {
    this._enableComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }
}
export interface GoogleContainerAzureClusterLoggingConfig {
  /**
  * component_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#component_config GoogleContainerAzureCluster#component_config}
  */
  readonly componentConfig?: GoogleContainerAzureClusterLoggingConfigComponentConfig;
}

export function googleContainerAzureClusterLoggingConfigToTerraform(struct?: GoogleContainerAzureClusterLoggingConfigOutputReference | GoogleContainerAzureClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_config: googleContainerAzureClusterLoggingConfigComponentConfigToTerraform(struct!.componentConfig),
  }
}


export function googleContainerAzureClusterLoggingConfigToHclTerraform(struct?: GoogleContainerAzureClusterLoggingConfigOutputReference | GoogleContainerAzureClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_config: {
      value: googleContainerAzureClusterLoggingConfigComponentConfigToHclTerraform(struct!.componentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAzureClusterLoggingConfigComponentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentConfig = this._componentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._componentConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._componentConfig.internalValue = value.componentConfig;
    }
  }

  // component_config - computed: false, optional: true, required: false
  private _componentConfig = new GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference(this, "component_config");
  public get componentConfig() {
    return this._componentConfig;
  }
  public putComponentConfig(value: GoogleContainerAzureClusterLoggingConfigComponentConfig) {
    this._componentConfig.internalValue = value;
  }
  public resetComponentConfig() {
    this._componentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentConfigInput() {
    return this._componentConfig.internalValue;
  }
}
export interface GoogleContainerAzureClusterNetworking {
  /**
  * The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#pod_address_cidr_blocks GoogleContainerAzureCluster#pod_address_cidr_blocks}
  */
  readonly podAddressCidrBlocks: string[];
  /**
  * The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#service_address_cidr_blocks GoogleContainerAzureCluster#service_address_cidr_blocks}
  */
  readonly serviceAddressCidrBlocks: string[];
  /**
  * The Azure Resource Manager (ARM) ID of the VNet associated with your cluster. All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/* /resourceGroups/* /providers/Microsoft.Network/virtualNetworks/*` This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#virtual_network_id GoogleContainerAzureCluster#virtual_network_id}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly virtualNetworkId: string;
}

export function googleContainerAzureClusterNetworkingToTerraform(struct?: GoogleContainerAzureClusterNetworkingOutputReference | GoogleContainerAzureClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAddressCidrBlocks),
    service_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddressCidrBlocks),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function googleContainerAzureClusterNetworkingToHclTerraform(struct?: GoogleContainerAzureClusterNetworkingOutputReference | GoogleContainerAzureClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAzureClusterNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAzureClusterNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAddressCidrBlocks = this._podAddressCidrBlocks;
    }
    if (this._serviceAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAddressCidrBlocks = this._serviceAddressCidrBlocks;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAzureClusterNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podAddressCidrBlocks = undefined;
      this._serviceAddressCidrBlocks = undefined;
      this._virtualNetworkId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podAddressCidrBlocks = value.podAddressCidrBlocks;
      this._serviceAddressCidrBlocks = value.serviceAddressCidrBlocks;
      this._virtualNetworkId = value.virtualNetworkId;
    }
  }

  // pod_address_cidr_blocks - computed: false, optional: false, required: true
  private _podAddressCidrBlocks?: string[]; 
  public get podAddressCidrBlocks() {
    return this.getListAttribute('pod_address_cidr_blocks');
  }
  public set podAddressCidrBlocks(value: string[]) {
    this._podAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAddressCidrBlocksInput() {
    return this._podAddressCidrBlocks;
  }

  // service_address_cidr_blocks - computed: false, optional: false, required: true
  private _serviceAddressCidrBlocks?: string[]; 
  public get serviceAddressCidrBlocks() {
    return this.getListAttribute('service_address_cidr_blocks');
  }
  public set serviceAddressCidrBlocks(value: string[]) {
    this._serviceAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressCidrBlocksInput() {
    return this._serviceAddressCidrBlocks;
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }
}
export interface GoogleContainerAzureClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#create GoogleContainerAzureCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#delete GoogleContainerAzureCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#update GoogleContainerAzureCluster#update}
  */
  readonly update?: string;
}

export function googleContainerAzureClusterTimeoutsToTerraform(struct?: GoogleContainerAzureClusterTimeouts | cdktf.IResolvable): any {
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


export function googleContainerAzureClusterTimeoutsToHclTerraform(struct?: GoogleContainerAzureClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleContainerAzureClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleContainerAzureClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleContainerAzureClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster google_container_azure_cluster}
*/
export class GoogleContainerAzureCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_azure_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleContainerAzureCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleContainerAzureCluster to import
  * @param importFromId The id of the existing GoogleContainerAzureCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleContainerAzureCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_container_azure_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_container_azure_cluster google_container_azure_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleContainerAzureClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleContainerAzureClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_azure_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.16.0',
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
    this._annotations = config.annotations;
    this._azureRegion = config.azureRegion;
    this._client = config.client;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._resourceGroupId = config.resourceGroupId;
    this._authorization.internalValue = config.authorization;
    this._azureServicesAuthentication.internalValue = config.azureServicesAuthentication;
    this._controlPlane.internalValue = config.controlPlane;
    this._fleet.internalValue = config.fleet;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._networking.internalValue = config.networking;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // azure_region - computed: false, optional: false, required: true
  private _azureRegion?: string; 
  public get azureRegion() {
    return this.getStringAttribute('azure_region');
  }
  public set azureRegion(value: string) {
    this._azureRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionInput() {
    return this._azureRegion;
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // workload_identity_config - computed: true, optional: false, required: false
  private _workloadIdentityConfig = new GoogleContainerAzureClusterWorkloadIdentityConfigList(this, "workload_identity_config", false);
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization = new GoogleContainerAzureClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: GoogleContainerAzureClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // azure_services_authentication - computed: false, optional: true, required: false
  private _azureServicesAuthentication = new GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference(this, "azure_services_authentication");
  public get azureServicesAuthentication() {
    return this._azureServicesAuthentication;
  }
  public putAzureServicesAuthentication(value: GoogleContainerAzureClusterAzureServicesAuthentication) {
    this._azureServicesAuthentication.internalValue = value;
  }
  public resetAzureServicesAuthentication() {
    this._azureServicesAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureServicesAuthenticationInput() {
    return this._azureServicesAuthentication.internalValue;
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new GoogleContainerAzureClusterControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: GoogleContainerAzureClusterControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // fleet - computed: false, optional: false, required: true
  private _fleet = new GoogleContainerAzureClusterFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: GoogleContainerAzureClusterFleet) {
    this._fleet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new GoogleContainerAzureClusterLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: GoogleContainerAzureClusterLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // networking - computed: false, optional: false, required: true
  private _networking = new GoogleContainerAzureClusterNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: GoogleContainerAzureClusterNetworking) {
    this._networking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleContainerAzureClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleContainerAzureClusterTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      azure_region: cdktf.stringToTerraform(this._azureRegion),
      client: cdktf.stringToTerraform(this._client),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      authorization: googleContainerAzureClusterAuthorizationToTerraform(this._authorization.internalValue),
      azure_services_authentication: googleContainerAzureClusterAzureServicesAuthenticationToTerraform(this._azureServicesAuthentication.internalValue),
      control_plane: googleContainerAzureClusterControlPlaneToTerraform(this._controlPlane.internalValue),
      fleet: googleContainerAzureClusterFleetToTerraform(this._fleet.internalValue),
      logging_config: googleContainerAzureClusterLoggingConfigToTerraform(this._loggingConfig.internalValue),
      networking: googleContainerAzureClusterNetworkingToTerraform(this._networking.internalValue),
      timeouts: googleContainerAzureClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      azure_region: {
        value: cdktf.stringToHclTerraform(this._azureRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client: {
        value: cdktf.stringToHclTerraform(this._client),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: googleContainerAzureClusterAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAzureClusterAuthorizationList",
      },
      azure_services_authentication: {
        value: googleContainerAzureClusterAzureServicesAuthenticationToHclTerraform(this._azureServicesAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAzureClusterAzureServicesAuthenticationList",
      },
      control_plane: {
        value: googleContainerAzureClusterControlPlaneToHclTerraform(this._controlPlane.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAzureClusterControlPlaneList",
      },
      fleet: {
        value: googleContainerAzureClusterFleetToHclTerraform(this._fleet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAzureClusterFleetList",
      },
      logging_config: {
        value: googleContainerAzureClusterLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAzureClusterLoggingConfigList",
      },
      networking: {
        value: googleContainerAzureClusterNetworkingToHclTerraform(this._networking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAzureClusterNetworkingList",
      },
      timeouts: {
        value: googleContainerAzureClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleContainerAzureClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
