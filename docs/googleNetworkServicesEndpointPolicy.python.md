# `googleNetworkServicesEndpointPolicy` Submodule <a name="`googleNetworkServicesEndpointPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEndpointPolicy <a name="GoogleNetworkServicesEndpointPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy google_network_services_endpoint_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_matcher: GoogleNetworkServicesEndpointPolicyEndpointMatcher,
  name: str,
  type: str,
  authorization_policy: str = None,
  client_tls_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  server_tls_policy: str = None,
  timeouts: GoogleNetworkServicesEndpointPolicyTimeouts = None,
  traffic_port_selector: GoogleNetworkServicesEndpointPolicyTrafficPortSelector = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.endpointMatcher">endpoint_matcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | endpoint_matcher block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the EndpointPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.authorizationPolicy">authorization_policy</a></code> | <code>str</code> | This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.clientTlsPolicy">client_tls_policy</a></code> | <code>str</code> | A URL referring to a ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#id GoogleNetworkServicesEndpointPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#project GoogleNetworkServicesEndpointPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | A URL referring to ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.trafficPortSelector">traffic_port_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | traffic_port_selector block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_matcher`<sup>Required</sup> <a name="endpoint_matcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.endpointMatcher"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

endpoint_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#endpoint_matcher GoogleNetworkServicesEndpointPolicy#endpoint_matcher}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the EndpointPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#name GoogleNetworkServicesEndpointPolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.type"></a>

- *Type:* str

The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#type GoogleNetworkServicesEndpointPolicy#type}

---

##### `authorization_policy`<sup>Optional</sup> <a name="authorization_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.authorizationPolicy"></a>

- *Type:* str

This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#authorization_policy GoogleNetworkServicesEndpointPolicy#authorization_policy}

---

##### `client_tls_policy`<sup>Optional</sup> <a name="client_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.clientTlsPolicy"></a>

- *Type:* str

A URL referring to a ClientTlsPolicy resource.

ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#client_tls_policy GoogleNetworkServicesEndpointPolicy#client_tls_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#description GoogleNetworkServicesEndpointPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#id GoogleNetworkServicesEndpointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#labels GoogleNetworkServicesEndpointPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#project GoogleNetworkServicesEndpointPolicy#project}.

---

##### `server_tls_policy`<sup>Optional</sup> <a name="server_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.serverTlsPolicy"></a>

- *Type:* str

A URL referring to ServerTlsPolicy resource.

ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#server_tls_policy GoogleNetworkServicesEndpointPolicy#server_tls_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#timeouts GoogleNetworkServicesEndpointPolicy#timeouts}

---

##### `traffic_port_selector`<sup>Optional</sup> <a name="traffic_port_selector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.Initializer.parameter.trafficPortSelector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

traffic_port_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#traffic_port_selector GoogleNetworkServicesEndpointPolicy#traffic_port_selector}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher">put_endpoint_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector">put_traffic_port_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetAuthorizationPolicy">reset_authorization_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetClientTlsPolicy">reset_client_tls_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetServerTlsPolicy">reset_server_tls_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTrafficPortSelector">reset_traffic_port_selector</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_matcher` <a name="put_endpoint_matcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher"></a>

```python
def put_endpoint_matcher(
  metadata_label_matcher: GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher
) -> None
```

###### `metadata_label_matcher`<sup>Required</sup> <a name="metadata_label_matcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putEndpointMatcher.parameter.metadataLabelMatcher"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

metadata_label_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#metadata_label_matcher GoogleNetworkServicesEndpointPolicy#metadata_label_matcher}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#create GoogleNetworkServicesEndpointPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#delete GoogleNetworkServicesEndpointPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#update GoogleNetworkServicesEndpointPolicy#update}.

---

##### `put_traffic_port_selector` <a name="put_traffic_port_selector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector"></a>

```python
def put_traffic_port_selector(
  ports: typing.List[str]
) -> None
```

###### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.putTrafficPortSelector.parameter.ports"></a>

- *Type:* typing.List[str]

List of ports.

Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#ports GoogleNetworkServicesEndpointPolicy#ports}

---

##### `reset_authorization_policy` <a name="reset_authorization_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetAuthorizationPolicy"></a>

```python
def reset_authorization_policy() -> None
```

##### `reset_client_tls_policy` <a name="reset_client_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetClientTlsPolicy"></a>

```python
def reset_client_tls_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_server_tls_policy` <a name="reset_server_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetServerTlsPolicy"></a>

```python
def reset_server_tls_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_port_selector` <a name="reset_traffic_port_selector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.resetTrafficPortSelector"></a>

```python
def reset_traffic_port_selector() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEndpointPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkServicesEndpointPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesEndpointPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesEndpointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEndpointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcher">endpoint_matcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference">GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelector">traffic_port_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference">GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicyInput">authorization_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicyInput">client_tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcherInput">endpoint_matcher_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicyInput">server_tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelectorInput">traffic_port_selector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicy">authorization_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicy">client_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint_matcher`<sup>Required</sup> <a name="endpoint_matcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcher"></a>

```python
endpoint_matcher: GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference">GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference</a>

---

##### `traffic_port_selector`<sup>Required</sup> <a name="traffic_port_selector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelector"></a>

```python
traffic_port_selector: GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference">GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `authorization_policy_input`<sup>Optional</sup> <a name="authorization_policy_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicyInput"></a>

```python
authorization_policy_input: str
```

- *Type:* str

---

##### `client_tls_policy_input`<sup>Optional</sup> <a name="client_tls_policy_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicyInput"></a>

```python
client_tls_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `endpoint_matcher_input`<sup>Optional</sup> <a name="endpoint_matcher_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.endpointMatcherInput"></a>

```python
endpoint_matcher_input: GoogleNetworkServicesEndpointPolicyEndpointMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `server_tls_policy_input`<sup>Optional</sup> <a name="server_tls_policy_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicyInput"></a>

```python
server_tls_policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkServicesEndpointPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>]

---

##### `traffic_port_selector_input`<sup>Optional</sup> <a name="traffic_port_selector_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.trafficPortSelectorInput"></a>

```python
traffic_port_selector_input: GoogleNetworkServicesEndpointPolicyTrafficPortSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `authorization_policy`<sup>Required</sup> <a name="authorization_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.authorizationPolicy"></a>

```python
authorization_policy: str
```

- *Type:* str

---

##### `client_tls_policy`<sup>Required</sup> <a name="client_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.clientTlsPolicy"></a>

```python
client_tls_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `server_tls_policy`<sup>Required</sup> <a name="server_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEndpointPolicyConfig <a name="GoogleNetworkServicesEndpointPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_matcher: GoogleNetworkServicesEndpointPolicyEndpointMatcher,
  name: str,
  type: str,
  authorization_policy: str = None,
  client_tls_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  server_tls_policy: str = None,
  timeouts: GoogleNetworkServicesEndpointPolicyTimeouts = None,
  traffic_port_selector: GoogleNetworkServicesEndpointPolicyTrafficPortSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.endpointMatcher">endpoint_matcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | endpoint_matcher block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the EndpointPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.type">type</a></code> | <code>str</code> | The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.authorizationPolicy">authorization_policy</a></code> | <code>str</code> | This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.clientTlsPolicy">client_tls_policy</a></code> | <code>str</code> | A URL referring to a ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#id GoogleNetworkServicesEndpointPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#project GoogleNetworkServicesEndpointPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | A URL referring to ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.trafficPortSelector">traffic_port_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | traffic_port_selector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_matcher`<sup>Required</sup> <a name="endpoint_matcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.endpointMatcher"></a>

```python
endpoint_matcher: GoogleNetworkServicesEndpointPolicyEndpointMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

endpoint_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#endpoint_matcher GoogleNetworkServicesEndpointPolicy#endpoint_matcher}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the EndpointPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#name GoogleNetworkServicesEndpointPolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of endpoint policy. This is primarily used to validate the configuration. Possible values: ["SIDECAR_PROXY", "GRPC_SERVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#type GoogleNetworkServicesEndpointPolicy#type}

---

##### `authorization_policy`<sup>Optional</sup> <a name="authorization_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.authorizationPolicy"></a>

```python
authorization_policy: str
```

- *Type:* str

This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#authorization_policy GoogleNetworkServicesEndpointPolicy#authorization_policy}

---

##### `client_tls_policy`<sup>Optional</sup> <a name="client_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.clientTlsPolicy"></a>

```python
client_tls_policy: str
```

- *Type:* str

A URL referring to a ClientTlsPolicy resource.

ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#client_tls_policy GoogleNetworkServicesEndpointPolicy#client_tls_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#description GoogleNetworkServicesEndpointPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#id GoogleNetworkServicesEndpointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#labels GoogleNetworkServicesEndpointPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#project GoogleNetworkServicesEndpointPolicy#project}.

---

##### `server_tls_policy`<sup>Optional</sup> <a name="server_tls_policy" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

A URL referring to ServerTlsPolicy resource.

ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#server_tls_policy GoogleNetworkServicesEndpointPolicy#server_tls_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesEndpointPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#timeouts GoogleNetworkServicesEndpointPolicy#timeouts}

---

##### `traffic_port_selector`<sup>Optional</sup> <a name="traffic_port_selector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyConfig.property.trafficPortSelector"></a>

```python
traffic_port_selector: GoogleNetworkServicesEndpointPolicyTrafficPortSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

traffic_port_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#traffic_port_selector GoogleNetworkServicesEndpointPolicy#traffic_port_selector}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcher <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher(
  metadata_label_matcher: GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.property.metadataLabelMatcher">metadata_label_matcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | metadata_label_matcher block. |

---

##### `metadata_label_matcher`<sup>Required</sup> <a name="metadata_label_matcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher.property.metadataLabelMatcher"></a>

```python
metadata_label_matcher: GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

metadata_label_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#metadata_label_matcher GoogleNetworkServicesEndpointPolicy#metadata_label_matcher}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher(
  metadata_label_match_criteria: str,
  metadata_labels: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabelMatchCriteria">metadata_label_match_criteria</a></code> | <code>str</code> | Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabels">metadata_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]]</code> | metadata_labels block. |

---

##### `metadata_label_match_criteria`<sup>Required</sup> <a name="metadata_label_match_criteria" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabelMatchCriteria"></a>

```python
metadata_label_match_criteria: str
```

- *Type:* str

Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#metadata_label_match_criteria GoogleNetworkServicesEndpointPolicy#metadata_label_match_criteria}

---

##### `metadata_labels`<sup>Optional</sup> <a name="metadata_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher.property.metadataLabels"></a>

```python
metadata_labels: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]]

metadata_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#metadata_labels GoogleNetworkServicesEndpointPolicy#metadata_labels}

---

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels(
  label_name: str,
  label_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelName">label_name</a></code> | <code>str</code> | Required. Label name presented as key in xDS Node Metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelValue">label_value</a></code> | <code>str</code> | Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. |

---

##### `label_name`<sup>Required</sup> <a name="label_name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelName"></a>

```python
label_name: str
```

- *Type:* str

Required. Label name presented as key in xDS Node Metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#label_name GoogleNetworkServicesEndpointPolicy#label_name}

---

##### `label_value`<sup>Required</sup> <a name="label_value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels.property.labelValue"></a>

```python
label_value: str
```

- *Type:* str

Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#label_value GoogleNetworkServicesEndpointPolicy#label_value}

---

### GoogleNetworkServicesEndpointPolicyTimeouts <a name="GoogleNetworkServicesEndpointPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#create GoogleNetworkServicesEndpointPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#delete GoogleNetworkServicesEndpointPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#update GoogleNetworkServicesEndpointPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#create GoogleNetworkServicesEndpointPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#delete GoogleNetworkServicesEndpointPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#update GoogleNetworkServicesEndpointPolicy#update}.

---

### GoogleNetworkServicesEndpointPolicyTrafficPortSelector <a name="GoogleNetworkServicesEndpointPolicyTrafficPortSelector" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector(
  ports: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.property.ports">ports</a></code> | <code>typing.List[str]</code> | List of ports. |

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

List of ports.

Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#ports GoogleNetworkServicesEndpointPolicy#ports}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]]

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelNameInput">label_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValueInput">label_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelName">label_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValue">label_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_name_input`<sup>Optional</sup> <a name="label_name_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelNameInput"></a>

```python
label_name_input: str
```

- *Type:* str

---

##### `label_value_input`<sup>Optional</sup> <a name="label_value_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValueInput"></a>

```python
label_value_input: str
```

- *Type:* str

---

##### `label_name`<sup>Required</sup> <a name="label_name" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelName"></a>

```python
label_name: str
```

- *Type:* str

---

##### `label_value`<sup>Required</sup> <a name="label_value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.labelValue"></a>

```python
label_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels">put_metadata_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resetMetadataLabels">reset_metadata_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metadata_labels` <a name="put_metadata_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels"></a>

```python
def put_metadata_labels(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.putMetadataLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]]

---

##### `reset_metadata_labels` <a name="reset_metadata_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.resetMetadataLabels"></a>

```python
def reset_metadata_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabels">metadata_labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteriaInput">metadata_label_match_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelsInput">metadata_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteria">metadata_label_match_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_labels`<sup>Required</sup> <a name="metadata_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabels"></a>

```python
metadata_labels: GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabelsList</a>

---

##### `metadata_label_match_criteria_input`<sup>Optional</sup> <a name="metadata_label_match_criteria_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteriaInput"></a>

```python
metadata_label_match_criteria_input: str
```

- *Type:* str

---

##### `metadata_labels_input`<sup>Optional</sup> <a name="metadata_labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelsInput"></a>

```python
metadata_labels_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]]

---

##### `metadata_label_match_criteria`<sup>Required</sup> <a name="metadata_label_match_criteria" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.metadataLabelMatchCriteria"></a>

```python
metadata_label_match_criteria: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---


### GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference <a name="GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher">put_metadata_label_matcher</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metadata_label_matcher` <a name="put_metadata_label_matcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher"></a>

```python
def put_metadata_label_matcher(
  metadata_label_match_criteria: str,
  metadata_labels: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels]] = None
) -> None
```

###### `metadata_label_match_criteria`<sup>Required</sup> <a name="metadata_label_match_criteria" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher.parameter.metadataLabelMatchCriteria"></a>

- *Type:* str

Specifies how matching should be done. Possible values: ["MATCH_ANY", "MATCH_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#metadata_label_match_criteria GoogleNetworkServicesEndpointPolicy#metadata_label_match_criteria}

---

###### `metadata_labels`<sup>Optional</sup> <a name="metadata_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.putMetadataLabelMatcher.parameter.metadataLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherMetadataLabels</a>]]

metadata_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_network_services_endpoint_policy#metadata_labels GoogleNetworkServicesEndpointPolicy#metadata_labels}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcher">metadata_label_matcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcherInput">metadata_label_matcher_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_label_matcher`<sup>Required</sup> <a name="metadata_label_matcher" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcher"></a>

```python
metadata_label_matcher: GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcherOutputReference</a>

---

##### `metadata_label_matcher_input`<sup>Optional</sup> <a name="metadata_label_matcher_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.metadataLabelMatcherInput"></a>

```python
metadata_label_matcher_input: GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcherMetadataLabelMatcher</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcherOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEndpointPolicyEndpointMatcher
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyEndpointMatcher">GoogleNetworkServicesEndpointPolicyEndpointMatcher</a>

---


### GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference <a name="GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesEndpointPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTimeouts">GoogleNetworkServicesEndpointPolicyTimeouts</a>]

---


### GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference <a name="GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_endpoint_policy

googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesEndpointPolicyTrafficPortSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEndpointPolicy.GoogleNetworkServicesEndpointPolicyTrafficPortSelector">GoogleNetworkServicesEndpointPolicyTrafficPortSelector</a>

---



