# `googleNetworkConnectivityServiceConnectionPolicy` Submodule <a name="`googleNetworkConnectivityServiceConnectionPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityServiceConnectionPolicy <a name="GoogleNetworkConnectivityServiceConnectionPolicy" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy google_network_connectivity_service_connection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network: str,
  service_class: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  psc_config: GoogleNetworkConnectivityServiceConnectionPolicyPscConfig = None,
  timeouts: GoogleNetworkConnectivityServiceConnectionPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.network">network</a></code> | <code>str</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.serviceClass">service_class</a></code> | <code>str</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#location GoogleNetworkConnectivityServiceConnectionPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#name GoogleNetworkConnectivityServiceConnectionPolicy#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.network"></a>

- *Type:* str

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#network GoogleNetworkConnectivityServiceConnectionPolicy#network}

---

##### `service_class`<sup>Required</sup> <a name="service_class" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.serviceClass"></a>

- *Type:* str

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#service_class GoogleNetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.description"></a>

- *Type:* str

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#description GoogleNetworkConnectivityServiceConnectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#labels GoogleNetworkConnectivityServiceConnectionPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}.

---

##### `psc_config`<sup>Optional</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.pscConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#psc_config GoogleNetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#timeouts GoogleNetworkConnectivityServiceConnectionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig">put_psc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetPscConfig">reset_psc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_psc_config` <a name="put_psc_config" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig"></a>

```python
def put_psc_config(
  subnetworks: typing.List[str],
  limit: str = None
) -> None
```

###### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig.parameter.subnetworks"></a>

- *Type:* typing.List[str]

IDs of the subnetworks or fully qualified identifiers for the subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#subnetworks GoogleNetworkConnectivityServiceConnectionPolicy#subnetworks}

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putPscConfig.parameter.limit"></a>

- *Type:* str

Max number of PSC connections for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#limit GoogleNetworkConnectivityServiceConnectionPolicy#limit}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_psc_config` <a name="reset_psc_config" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetPscConfig"></a>

```python
def reset_psc_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkConnectivityServiceConnectionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkConnectivityServiceConnectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityServiceConnectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.infrastructure">infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConnections">psc_connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfigInput">psc_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClassInput">service_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClass">service_class</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `infrastructure`<sup>Required</sup> <a name="infrastructure" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.infrastructure"></a>

```python
infrastructure: str
```

- *Type:* str

---

##### `psc_config`<sup>Required</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfig"></a>

```python
psc_config: GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a>

---

##### `psc_connections`<sup>Required</sup> <a name="psc_connections" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConnections"></a>

```python
psc_connections: GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_config_input`<sup>Optional</sup> <a name="psc_config_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.pscConfigInput"></a>

```python
psc_config_input: GoogleNetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `service_class_input`<sup>Optional</sup> <a name="service_class_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClassInput"></a>

```python
service_class_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkConnectivityServiceConnectionPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_class`<sup>Required</sup> <a name="service_class" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.serviceClass"></a>

```python
service_class: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityServiceConnectionPolicyConfig <a name="GoogleNetworkConnectivityServiceConnectionPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  network: str,
  service_class: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  psc_config: GoogleNetworkConnectivityServiceConnectionPolicyPscConfig = None,
  timeouts: GoogleNetworkConnectivityServiceConnectionPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.location">location</a></code> | <code>str</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.network">network</a></code> | <code>str</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass">service_class</a></code> | <code>str</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.description">description</a></code> | <code>str</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#location GoogleNetworkConnectivityServiceConnectionPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#name GoogleNetworkConnectivityServiceConnectionPolicy#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#network GoogleNetworkConnectivityServiceConnectionPolicy#network}

---

##### `service_class`<sup>Required</sup> <a name="service_class" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass"></a>

```python
service_class: str
```

- *Type:* str

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#service_class GoogleNetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#description GoogleNetworkConnectivityServiceConnectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#id GoogleNetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#labels GoogleNetworkConnectivityServiceConnectionPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#project GoogleNetworkConnectivityServiceConnectionPolicy#project}.

---

##### `psc_config`<sup>Optional</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig"></a>

```python
psc_config: GoogleNetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#psc_config GoogleNetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityServiceConnectionPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#timeouts GoogleNetworkConnectivityServiceConnectionPolicy#timeouts}

---

### GoogleNetworkConnectivityServiceConnectionPolicyPscConfig <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig(
  subnetworks: typing.List[str],
  limit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks">subnetworks</a></code> | <code>typing.List[str]</code> | IDs of the subnetworks or fully qualified identifiers for the subnetworks. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.limit">limit</a></code> | <code>str</code> | Max number of PSC connections for this policy. |

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks"></a>

```python
subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

IDs of the subnetworks or fully qualified identifiers for the subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#subnetworks GoogleNetworkConnectivityServiceConnectionPolicy#subnetworks}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig.property.limit"></a>

```python
limit: str
```

- *Type:* str

Max number of PSC connections for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#limit GoogleNetworkConnectivityServiceConnectionPolicy#limit}

---

### GoogleNetworkConnectivityServiceConnectionPolicyPscConnections <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnections" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections()
```


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError()
```


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo()
```


### GoogleNetworkConnectivityServiceConnectionPolicyTimeouts <a name="GoogleNetworkConnectivityServiceConnectionPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#create GoogleNetworkConnectivityServiceConnectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#delete GoogleNetworkConnectivityServiceConnectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_network_connectivity_service_connection_policy#update GoogleNetworkConnectivityServiceConnectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit">reset_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput">limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput">subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit">limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks">subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput"></a>

```python
limit_input: str
```

- *Type:* str

---

##### `subnetworks_input`<sup>Optional</sup> <a name="subnetworks_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput"></a>

```python
subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit"></a>

```python
limit: str
```

- *Type:* str

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks"></a>

```python
subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityServiceConnectionPolicyPscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConfig">GoogleNetworkConnectivityServiceConnectionPolicyPscConfig</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsError</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress">consumer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule">consumer_forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject">consumer_target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo">error_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType">error_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation">gce_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections">GoogleNetworkConnectivityServiceConnectionPolicyPscConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_address`<sup>Required</sup> <a name="consumer_address" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress"></a>

```python
consumer_address: str
```

- *Type:* str

---

##### `consumer_forwarding_rule`<sup>Required</sup> <a name="consumer_forwarding_rule" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule"></a>

```python
consumer_forwarding_rule: str
```

- *Type:* str

---

##### `consumer_target_project`<sup>Required</sup> <a name="consumer_target_project" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject"></a>

```python
consumer_target_project: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error"></a>

```python
error: GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a>

---

##### `error_info`<sup>Required</sup> <a name="error_info" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo"></a>

```python
error_info: GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a>

---

##### `error_type`<sup>Required</sup> <a name="error_type" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType"></a>

```python
error_type: str
```

- *Type:* str

---

##### `gce_operation`<sup>Required</sup> <a name="gce_operation" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation"></a>

```python
gce_operation: str
```

- *Type:* str

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkConnectivityServiceConnectionPolicyPscConnections
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyPscConnections">GoogleNetworkConnectivityServiceConnectionPolicyPscConnections</a>

---


### GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference <a name="GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_service_connection_policy

googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkConnectivityServiceConnectionPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityServiceConnectionPolicy.GoogleNetworkConnectivityServiceConnectionPolicyTimeouts">GoogleNetworkConnectivityServiceConnectionPolicyTimeouts</a>]

---



