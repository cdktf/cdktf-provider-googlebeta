// https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleRedisClusterUserCreatedConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Redis cluster these endpoints should be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#name GoogleRedisClusterUserCreatedConnections#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}
  */
  readonly project?: string;
  /**
  * The name of the region of the Redis cluster these endpoints should be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#region GoogleRedisClusterUserCreatedConnections#region}
  */
  readonly region: string;
  /**
  * cluster_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#cluster_endpoints GoogleRedisClusterUserCreatedConnections#cluster_endpoints}
  */
  readonly clusterEndpoints?: GoogleRedisClusterUserCreatedConnectionsClusterEndpoints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#timeouts GoogleRedisClusterUserCreatedConnections#timeouts}
  */
  readonly timeouts?: GoogleRedisClusterUserCreatedConnectionsTimeouts;
}
export interface GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection {
  /**
  * The IP allocated on the consumer network for the PSC forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#address GoogleRedisClusterUserCreatedConnections#address}
  */
  readonly address: string;
  /**
  * The URI of the consumer side forwarding rule.
  * Format:
  * projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#forwarding_rule GoogleRedisClusterUserCreatedConnections#forwarding_rule}
  */
  readonly forwardingRule: string;
  /**
  * The consumer network where the IP address resides, in the form of
  * projects/{project_id}/global/networks/{network_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#network GoogleRedisClusterUserCreatedConnections#network}
  */
  readonly network: string;
  /**
  * The consumer project_id where the forwarding rule is created from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#project_id GoogleRedisClusterUserCreatedConnections#project_id}
  */
  readonly projectId?: string;
  /**
  * The PSC connection id of the forwarding rule connected to the
  * service attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection_id GoogleRedisClusterUserCreatedConnections#psc_connection_id}
  */
  readonly pscConnectionId: string;
  /**
  * The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#service_attachment GoogleRedisClusterUserCreatedConnections#service_attachment}
  */
  readonly serviceAttachment: string;
}

export function googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionToTerraform(struct?: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference | GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    forwarding_rule: cdktf.stringToTerraform(struct!.forwardingRule),
    network: cdktf.stringToTerraform(struct!.network),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    psc_connection_id: cdktf.stringToTerraform(struct!.pscConnectionId),
    service_attachment: cdktf.stringToTerraform(struct!.serviceAttachment),
  }
}


export function googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionToHclTerraform(struct?: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference | GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_rule: {
      value: cdktf.stringToHclTerraform(struct!.forwardingRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
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
    psc_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.pscConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_attachment: {
      value: cdktf.stringToHclTerraform(struct!.serviceAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._forwardingRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingRule = this._forwardingRule;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._pscConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscConnectionId = this._pscConnectionId;
    }
    if (this._serviceAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachment = this._serviceAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._forwardingRule = undefined;
      this._network = undefined;
      this._projectId = undefined;
      this._pscConnectionId = undefined;
      this._serviceAttachment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._forwardingRule = value.forwardingRule;
      this._network = value.network;
      this._projectId = value.projectId;
      this._pscConnectionId = value.pscConnectionId;
      this._serviceAttachment = value.serviceAttachment;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // forwarding_rule - computed: false, optional: false, required: true
  private _forwardingRule?: string; 
  public get forwardingRule() {
    return this.getStringAttribute('forwarding_rule');
  }
  public set forwardingRule(value: string) {
    this._forwardingRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // project_id - computed: true, optional: true, required: false
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

  // psc_connection_id - computed: false, optional: false, required: true
  private _pscConnectionId?: string; 
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }
  public set pscConnectionId(value: string) {
    this._pscConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConnectionIdInput() {
    return this._pscConnectionId;
  }

  // psc_connection_status - computed: true, optional: false, required: false
  public get pscConnectionStatus() {
    return this.getStringAttribute('psc_connection_status');
  }

  // service_attachment - computed: false, optional: false, required: true
  private _serviceAttachment?: string; 
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
  public set serviceAttachment(value: string) {
    this._serviceAttachment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment;
  }
}
export interface GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections {
  /**
  * psc_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection GoogleRedisClusterUserCreatedConnections#psc_connection}
  */
  readonly pscConnection?: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;
}

export function googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsToTerraform(struct?: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    psc_connection: googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionToTerraform(struct!.pscConnection),
  }
}


export function googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsToHclTerraform(struct?: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    psc_connection: {
      value: googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionToHclTerraform(struct!.pscConnection),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pscConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscConnection = this._pscConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pscConnection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pscConnection.internalValue = value.pscConnection;
    }
  }

  // psc_connection - computed: false, optional: true, required: false
  private _pscConnection = new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference(this, "psc_connection");
  public get pscConnection() {
    return this._pscConnection;
  }
  public putPscConnection(value: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection) {
    this._pscConnection.internalValue = value;
  }
  public resetPscConnection() {
    this._pscConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscConnectionInput() {
    return this._pscConnection.internalValue;
  }
}

export class GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList extends cdktf.ComplexList {
  public internalValue? : GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections[] | cdktf.IResolvable

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
  public get(index: number): GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference {
    return new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterUserCreatedConnectionsClusterEndpoints {
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#connections GoogleRedisClusterUserCreatedConnections#connections}
  */
  readonly connections?: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections[] | cdktf.IResolvable;
}

export function googleRedisClusterUserCreatedConnectionsClusterEndpointsToTerraform(struct?: GoogleRedisClusterUserCreatedConnectionsClusterEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connections: cdktf.listMapper(googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsToTerraform, true)(struct!.connections),
  }
}


export function googleRedisClusterUserCreatedConnectionsClusterEndpointsToHclTerraform(struct?: GoogleRedisClusterUserCreatedConnectionsClusterEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connections: {
      value: cdktf.listMapperHcl(googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsToHclTerraform, true)(struct!.connections),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleRedisClusterUserCreatedConnectionsClusterEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleRedisClusterUserCreatedConnectionsClusterEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connections.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connections.internalValue = value.connections;
    }
  }

  // connections - computed: false, optional: true, required: false
  private _connections = new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }
}

export class GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList extends cdktf.ComplexList {
  public internalValue? : GoogleRedisClusterUserCreatedConnectionsClusterEndpoints[] | cdktf.IResolvable

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
  public get(index: number): GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference {
    return new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleRedisClusterUserCreatedConnectionsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#create GoogleRedisClusterUserCreatedConnections#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#delete GoogleRedisClusterUserCreatedConnections#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#update GoogleRedisClusterUserCreatedConnections#update}
  */
  readonly update?: string;
}

export function googleRedisClusterUserCreatedConnectionsTimeoutsToTerraform(struct?: GoogleRedisClusterUserCreatedConnectionsTimeouts | cdktf.IResolvable): any {
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


export function googleRedisClusterUserCreatedConnectionsTimeoutsToHclTerraform(struct?: GoogleRedisClusterUserCreatedConnectionsTimeouts | cdktf.IResolvable): any {
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

export class GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleRedisClusterUserCreatedConnectionsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleRedisClusterUserCreatedConnectionsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections google_redis_cluster_user_created_connections}
*/
export class GoogleRedisClusterUserCreatedConnections extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_redis_cluster_user_created_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleRedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleRedisClusterUserCreatedConnections to import
  * @param importFromId The id of the existing GoogleRedisClusterUserCreatedConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleRedisClusterUserCreatedConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_redis_cluster_user_created_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_redis_cluster_user_created_connections google_redis_cluster_user_created_connections} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleRedisClusterUserCreatedConnectionsConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleRedisClusterUserCreatedConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_redis_cluster_user_created_connections',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.23.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._clusterEndpoints.internalValue = config.clusterEndpoints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // cluster_endpoints - computed: false, optional: true, required: false
  private _clusterEndpoints = new GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList(this, "cluster_endpoints", false);
  public get clusterEndpoints() {
    return this._clusterEndpoints;
  }
  public putClusterEndpoints(value: GoogleRedisClusterUserCreatedConnectionsClusterEndpoints[] | cdktf.IResolvable) {
    this._clusterEndpoints.internalValue = value;
  }
  public resetClusterEndpoints() {
    this._clusterEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointsInput() {
    return this._clusterEndpoints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleRedisClusterUserCreatedConnectionsTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      cluster_endpoints: cdktf.listMapper(googleRedisClusterUserCreatedConnectionsClusterEndpointsToTerraform, true)(this._clusterEndpoints.internalValue),
      timeouts: googleRedisClusterUserCreatedConnectionsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      cluster_endpoints: {
        value: cdktf.listMapperHcl(googleRedisClusterUserCreatedConnectionsClusterEndpointsToHclTerraform, true)(this._clusterEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList",
      },
      timeouts: {
        value: googleRedisClusterUserCreatedConnectionsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleRedisClusterUserCreatedConnectionsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
