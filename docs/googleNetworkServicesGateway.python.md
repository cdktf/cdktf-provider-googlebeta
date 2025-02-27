# `googleNetworkServicesGateway` Submodule <a name="`googleNetworkServicesGateway` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesGateway <a name="GoogleNetworkServicesGateway" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway google_network_services_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_gateway

googleNetworkServicesGateway.GoogleNetworkServicesGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ports: typing.List[typing.Union[int, float]],
  type: str,
  addresses: typing.List[str] = None,
  certificate_urls: typing.List[str] = None,
  delete_swg_autogen_router_on_destroy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  gateway_security_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  network: str = None,
  project: str = None,
  routing_mode: str = None,
  scope: str = None,
  server_tls_policy: str = None,
  subnetwork: str = None,
  timeouts: GoogleNetworkServicesGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Short name of the Gateway resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | One or more port numbers (1-65535), on which the Gateway will receive traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.type">type</a></code> | <code>str</code> | Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.addresses">addresses</a></code> | <code>typing.List[str]</code> | Zero or one IPv4-address on which the Gateway will receive the traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.certificateUrls">certificate_urls</a></code> | <code>typing.List[str]</code> | A fully-qualified Certificates URL reference. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.deleteSwgAutogenRouterOnDestroy">delete_swg_autogen_router_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | A fully-qualified GatewaySecurityPolicy URL reference. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#id GoogleNetworkServicesGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the Gateway resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.network">network</a></code> | <code>str</code> | The relative resource name identifying the VPC network that is using this configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#project GoogleNetworkServicesGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.routingMode">routing_mode</a></code> | <code>str</code> | The routing mode of the Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | The relative resource name identifying the subnetwork in which this SWG is allocated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.name"></a>

- *Type:* str

Short name of the Gateway resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#name GoogleNetworkServicesGateway#name}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

One or more port numbers (1-65535), on which the Gateway will receive traffic.

The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are
limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#ports GoogleNetworkServicesGateway#ports}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.type"></a>

- *Type:* str

Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#type GoogleNetworkServicesGateway#type}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.addresses"></a>

- *Type:* typing.List[str]

Zero or one IPv4-address on which the Gateway will receive the traffic.

When no address is provided,
an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#addresses GoogleNetworkServicesGateway#addresses}

---

##### `certificate_urls`<sup>Optional</sup> <a name="certificate_urls" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.certificateUrls"></a>

- *Type:* typing.List[str]

A fully-qualified Certificates URL reference.

The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#certificate_urls GoogleNetworkServicesGateway#certificate_urls}

---

##### `delete_swg_autogen_router_on_destroy`<sup>Optional</sup> <a name="delete_swg_autogen_router_on_destroy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.deleteSwgAutogenRouterOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.

If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#delete_swg_autogen_router_on_destroy GoogleNetworkServicesGateway#delete_swg_autogen_router_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#description GoogleNetworkServicesGateway#description}

---

##### `gateway_security_policy`<sup>Optional</sup> <a name="gateway_security_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.gatewaySecurityPolicy"></a>

- *Type:* str

A fully-qualified GatewaySecurityPolicy URL reference.

Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#gateway_security_policy GoogleNetworkServicesGateway#gateway_security_policy}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#id GoogleNetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the Gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#labels GoogleNetworkServicesGateway#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.location"></a>

- *Type:* str

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#location GoogleNetworkServicesGateway#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.network"></a>

- *Type:* str

The relative resource name identifying the VPC network that is using this configuration.

For example: 'projects/* /global/networks/network-1'.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#network GoogleNetworkServicesGateway#network}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#project GoogleNetworkServicesGateway#project}.

---

##### `routing_mode`<sup>Optional</sup> <a name="routing_mode" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.routingMode"></a>

- *Type:* str

The routing mode of the Gateway.

This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#routing_mode GoogleNetworkServicesGateway#routing_mode}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* str

Immutable.

Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as
a single coniguration to the proxy/load balancer.
Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#scope GoogleNetworkServicesGateway#scope}

---

##### `server_tls_policy`<sup>Optional</sup> <a name="server_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.serverTlsPolicy"></a>

- *Type:* str

A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#server_tls_policy GoogleNetworkServicesGateway#server_tls_policy}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.subnetwork"></a>

- *Type:* str

The relative resource name identifying the subnetwork in which this SWG is allocated.

For example: 'projects/* /regions/us-central1/subnetworks/network-1'.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#subnetwork GoogleNetworkServicesGateway#subnetwork}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#timeouts GoogleNetworkServicesGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetAddresses">reset_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetCertificateUrls">reset_certificate_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy">reset_delete_swg_autogen_router_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetGatewaySecurityPolicy">reset_gateway_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetRoutingMode">reset_routing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetServerTlsPolicy">reset_server_tls_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#create GoogleNetworkServicesGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#delete GoogleNetworkServicesGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#update GoogleNetworkServicesGateway#update}.

---

##### `reset_addresses` <a name="reset_addresses" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetAddresses"></a>

```python
def reset_addresses() -> None
```

##### `reset_certificate_urls` <a name="reset_certificate_urls" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetCertificateUrls"></a>

```python
def reset_certificate_urls() -> None
```

##### `reset_delete_swg_autogen_router_on_destroy` <a name="reset_delete_swg_autogen_router_on_destroy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy"></a>

```python
def reset_delete_swg_autogen_router_on_destroy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateway_security_policy` <a name="reset_gateway_security_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetGatewaySecurityPolicy"></a>

```python
def reset_gateway_security_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_routing_mode` <a name="reset_routing_mode" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetRoutingMode"></a>

```python
def reset_routing_mode() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_server_tls_policy` <a name="reset_server_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetServerTlsPolicy"></a>

```python
def reset_server_tls_policy() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_gateway

googleNetworkServicesGateway.GoogleNetworkServicesGateway.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_gateway

googleNetworkServicesGateway.GoogleNetworkServicesGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_gateway

googleNetworkServicesGateway.GoogleNetworkServicesGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_gateway

googleNetworkServicesGateway.GoogleNetworkServicesGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkServicesGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference">GoogleNetworkServicesGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.addressesInput">addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.certificateUrlsInput">certificate_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput">delete_swg_autogen_router_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.gatewaySecurityPolicyInput">gateway_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.routingModeInput">routing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.serverTlsPolicyInput">server_tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.certificateUrls">certificate_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy">delete_swg_autogen_router_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.routingMode">routing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference">GoogleNetworkServicesGatewayTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.addressesInput"></a>

```python
addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_urls_input`<sup>Optional</sup> <a name="certificate_urls_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.certificateUrlsInput"></a>

```python
certificate_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delete_swg_autogen_router_on_destroy_input`<sup>Optional</sup> <a name="delete_swg_autogen_router_on_destroy_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput"></a>

```python
delete_swg_autogen_router_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateway_security_policy_input`<sup>Optional</sup> <a name="gateway_security_policy_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.gatewaySecurityPolicyInput"></a>

```python
gateway_security_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `routing_mode_input`<sup>Optional</sup> <a name="routing_mode_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.routingModeInput"></a>

```python
routing_mode_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `server_tls_policy_input`<sup>Optional</sup> <a name="server_tls_policy_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.serverTlsPolicyInput"></a>

```python
server_tls_policy_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkServicesGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_urls`<sup>Required</sup> <a name="certificate_urls" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.certificateUrls"></a>

```python
certificate_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delete_swg_autogen_router_on_destroy`<sup>Required</sup> <a name="delete_swg_autogen_router_on_destroy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy"></a>

```python
delete_swg_autogen_router_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateway_security_policy`<sup>Required</sup> <a name="gateway_security_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.gatewaySecurityPolicy"></a>

```python
gateway_security_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `routing_mode`<sup>Required</sup> <a name="routing_mode" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `server_tls_policy`<sup>Required</sup> <a name="server_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesGatewayConfig <a name="GoogleNetworkServicesGatewayConfig" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_gateway

googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ports: typing.List[typing.Union[int, float]],
  type: str,
  addresses: typing.List[str] = None,
  certificate_urls: typing.List[str] = None,
  delete_swg_autogen_router_on_destroy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  gateway_security_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  network: str = None,
  project: str = None,
  routing_mode: str = None,
  scope: str = None,
  server_tls_policy: str = None,
  subnetwork: str = None,
  timeouts: GoogleNetworkServicesGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.name">name</a></code> | <code>str</code> | Short name of the Gateway resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | One or more port numbers (1-65535), on which the Gateway will receive traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.type">type</a></code> | <code>str</code> | Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | Zero or one IPv4-address on which the Gateway will receive the traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.certificateUrls">certificate_urls</a></code> | <code>typing.List[str]</code> | A fully-qualified Certificates URL reference. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy">delete_swg_autogen_router_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | A fully-qualified GatewaySecurityPolicy URL reference. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#id GoogleNetworkServicesGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the Gateway resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.location">location</a></code> | <code>str</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.network">network</a></code> | <code>str</code> | The relative resource name identifying the VPC network that is using this configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#project GoogleNetworkServicesGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.routingMode">routing_mode</a></code> | <code>str</code> | The routing mode of the Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.scope">scope</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The relative resource name identifying the subnetwork in which this SWG is allocated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Short name of the Gateway resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#name GoogleNetworkServicesGateway#name}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

One or more port numbers (1-65535), on which the Gateway will receive traffic.

The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are
limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#ports GoogleNetworkServicesGateway#ports}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#type GoogleNetworkServicesGateway#type}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

Zero or one IPv4-address on which the Gateway will receive the traffic.

When no address is provided,
an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#addresses GoogleNetworkServicesGateway#addresses}

---

##### `certificate_urls`<sup>Optional</sup> <a name="certificate_urls" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.certificateUrls"></a>

```python
certificate_urls: typing.List[str]
```

- *Type:* typing.List[str]

A fully-qualified Certificates URL reference.

The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#certificate_urls GoogleNetworkServicesGateway#certificate_urls}

---

##### `delete_swg_autogen_router_on_destroy`<sup>Optional</sup> <a name="delete_swg_autogen_router_on_destroy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy"></a>

```python
delete_swg_autogen_router_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.

If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#delete_swg_autogen_router_on_destroy GoogleNetworkServicesGateway#delete_swg_autogen_router_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#description GoogleNetworkServicesGateway#description}

---

##### `gateway_security_policy`<sup>Optional</sup> <a name="gateway_security_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.gatewaySecurityPolicy"></a>

```python
gateway_security_policy: str
```

- *Type:* str

A fully-qualified GatewaySecurityPolicy URL reference.

Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#gateway_security_policy GoogleNetworkServicesGateway#gateway_security_policy}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#id GoogleNetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the Gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#labels GoogleNetworkServicesGateway#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#location GoogleNetworkServicesGateway#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The relative resource name identifying the VPC network that is using this configuration.

For example: 'projects/* /global/networks/network-1'.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#network GoogleNetworkServicesGateway#network}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#project GoogleNetworkServicesGateway#project}.

---

##### `routing_mode`<sup>Optional</sup> <a name="routing_mode" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

The routing mode of the Gateway.

This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#routing_mode GoogleNetworkServicesGateway#routing_mode}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Immutable.

Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as
a single coniguration to the proxy/load balancer.
Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#scope GoogleNetworkServicesGateway#scope}

---

##### `server_tls_policy`<sup>Optional</sup> <a name="server_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#server_tls_policy GoogleNetworkServicesGateway#server_tls_policy}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The relative resource name identifying the subnetwork in which this SWG is allocated.

For example: 'projects/* /regions/us-central1/subnetworks/network-1'.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#subnetwork GoogleNetworkServicesGateway#subnetwork}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#timeouts GoogleNetworkServicesGateway#timeouts}

---

### GoogleNetworkServicesGatewayTimeouts <a name="GoogleNetworkServicesGatewayTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_gateway

googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#create GoogleNetworkServicesGateway#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#delete GoogleNetworkServicesGateway#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#update GoogleNetworkServicesGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#create GoogleNetworkServicesGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#delete GoogleNetworkServicesGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_gateway#update GoogleNetworkServicesGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesGatewayTimeoutsOutputReference <a name="GoogleNetworkServicesGatewayTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_gateway

googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a>]

---



