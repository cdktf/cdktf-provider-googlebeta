# `googleNetworkConnectivityRegionalEndpoint` Submodule <a name="`googleNetworkConnectivityRegionalEndpoint` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityRegionalEndpoint <a name="GoogleNetworkConnectivityRegionalEndpoint" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint google_network_connectivity_regional_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_regional_endpoint

googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_type: str,
  location: str,
  name: str,
  target_google_api: str,
  address: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  project: str = None,
  subnetwork: str = None,
  timeouts: GoogleNetworkConnectivityRegionalEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | The access type of this regional endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.targetGoogleApi">target_google_api</a></code> | <code>str</code> | The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.address">address</a></code> | <code>str</code> | The IP Address of the Regional Endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#id GoogleNetworkConnectivityRegionalEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.network">network</a></code> | <code>str</code> | The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#project GoogleNetworkConnectivityRegionalEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts">GoogleNetworkConnectivityRegionalEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.accessType"></a>

- *Type:* str

The access type of this regional endpoint.

This field is reflected in the PSC Forwarding Rule configuration to enable global access. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#access_type GoogleNetworkConnectivityRegionalEndpoint#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.location"></a>

- *Type:* str

The location of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#location GoogleNetworkConnectivityRegionalEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.name"></a>

- *Type:* str

The name of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#name GoogleNetworkConnectivityRegionalEndpoint#name}

---

##### `target_google_api`<sup>Required</sup> <a name="target_google_api" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.targetGoogleApi"></a>

- *Type:* str

The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#target_google_api GoogleNetworkConnectivityRegionalEndpoint#target_google_api}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.address"></a>

- *Type:* str

The IP Address of the Regional Endpoint.

When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in '10.0.0.1' * Address resource URI as in 'projects/{project}/regions/{region}/addresses/{address_name}'

~> **Note:** This field accepts both a reference to a Compute Address resource, which is the resource name of which format is given in the description, and IP literal value. If the user chooses to input a reserved address value; they need to make sure that the reserved address is in IPv4 version, its purpose is GCE_ENDPOINT, its type is INTERNAL and its status is RESERVED. If the user chooses to input an IP literal, they need to make sure that it's a valid IPv4 address (x.x.x.x) within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#address GoogleNetworkConnectivityRegionalEndpoint#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.description"></a>

- *Type:* str

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#description GoogleNetworkConnectivityRegionalEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#id GoogleNetworkConnectivityRegionalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#labels GoogleNetworkConnectivityRegionalEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.network"></a>

- *Type:* str

The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#network GoogleNetworkConnectivityRegionalEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#project GoogleNetworkConnectivityRegionalEndpoint#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.subnetwork"></a>

- *Type:* str

The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#subnetwork GoogleNetworkConnectivityRegionalEndpoint#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts">GoogleNetworkConnectivityRegionalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#timeouts GoogleNetworkConnectivityRegionalEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#create GoogleNetworkConnectivityRegionalEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#delete GoogleNetworkConnectivityRegionalEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#update GoogleNetworkConnectivityRegionalEndpoint#update}.

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityRegionalEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_regional_endpoint

googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_regional_endpoint

googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_regional_endpoint

googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_regional_endpoint

googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkConnectivityRegionalEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkConnectivityRegionalEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkConnectivityRegionalEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityRegionalEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.pscForwardingRule">psc_forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference">GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.targetGoogleApiInput">target_google_api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts">GoogleNetworkConnectivityRegionalEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.targetGoogleApi">target_google_api</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `psc_forwarding_rule`<sup>Required</sup> <a name="psc_forwarding_rule" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.pscForwardingRule"></a>

```python
psc_forwarding_rule: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference">GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `target_google_api_input`<sup>Optional</sup> <a name="target_google_api_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.targetGoogleApiInput"></a>

```python
target_google_api_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkConnectivityRegionalEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts">GoogleNetworkConnectivityRegionalEndpointTimeouts</a>]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `target_google_api`<sup>Required</sup> <a name="target_google_api" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.targetGoogleApi"></a>

```python
target_google_api: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityRegionalEndpointConfig <a name="GoogleNetworkConnectivityRegionalEndpointConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_regional_endpoint

googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_type: str,
  location: str,
  name: str,
  target_google_api: str,
  address: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  project: str = None,
  subnetwork: str = None,
  timeouts: GoogleNetworkConnectivityRegionalEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.accessType">access_type</a></code> | <code>str</code> | The access type of this regional endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.location">location</a></code> | <code>str</code> | The location of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.name">name</a></code> | <code>str</code> | The name of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.targetGoogleApi">target_google_api</a></code> | <code>str</code> | The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.address">address</a></code> | <code>str</code> | The IP Address of the Regional Endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.description">description</a></code> | <code>str</code> | A description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#id GoogleNetworkConnectivityRegionalEndpoint#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.network">network</a></code> | <code>str</code> | The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#project GoogleNetworkConnectivityRegionalEndpoint#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts">GoogleNetworkConnectivityRegionalEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

The access type of this regional endpoint.

This field is reflected in the PSC Forwarding Rule configuration to enable global access. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#access_type GoogleNetworkConnectivityRegionalEndpoint#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#location GoogleNetworkConnectivityRegionalEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#name GoogleNetworkConnectivityRegionalEndpoint#name}

---

##### `target_google_api`<sup>Required</sup> <a name="target_google_api" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.targetGoogleApi"></a>

```python
target_google_api: str
```

- *Type:* str

The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#target_google_api GoogleNetworkConnectivityRegionalEndpoint#target_google_api}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The IP Address of the Regional Endpoint.

When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in '10.0.0.1' * Address resource URI as in 'projects/{project}/regions/{region}/addresses/{address_name}'

~> **Note:** This field accepts both a reference to a Compute Address resource, which is the resource name of which format is given in the description, and IP literal value. If the user chooses to input a reserved address value; they need to make sure that the reserved address is in IPv4 version, its purpose is GCE_ENDPOINT, its type is INTERNAL and its status is RESERVED. If the user chooses to input an IP literal, they need to make sure that it's a valid IPv4 address (x.x.x.x) within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#address GoogleNetworkConnectivityRegionalEndpoint#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#description GoogleNetworkConnectivityRegionalEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#id GoogleNetworkConnectivityRegionalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#labels GoogleNetworkConnectivityRegionalEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#network GoogleNetworkConnectivityRegionalEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#project GoogleNetworkConnectivityRegionalEndpoint#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#subnetwork GoogleNetworkConnectivityRegionalEndpoint#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkConnectivityRegionalEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts">GoogleNetworkConnectivityRegionalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#timeouts GoogleNetworkConnectivityRegionalEndpoint#timeouts}

---

### GoogleNetworkConnectivityRegionalEndpointTimeouts <a name="GoogleNetworkConnectivityRegionalEndpointTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_regional_endpoint

googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#create GoogleNetworkConnectivityRegionalEndpoint#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#delete GoogleNetworkConnectivityRegionalEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#update GoogleNetworkConnectivityRegionalEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#create GoogleNetworkConnectivityRegionalEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#delete GoogleNetworkConnectivityRegionalEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_network_connectivity_regional_endpoint#update GoogleNetworkConnectivityRegionalEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference <a name="GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_connectivity_regional_endpoint

googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts">GoogleNetworkConnectivityRegionalEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkConnectivityRegionalEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityRegionalEndpoint.GoogleNetworkConnectivityRegionalEndpointTimeouts">GoogleNetworkConnectivityRegionalEndpointTimeouts</a>]

---



