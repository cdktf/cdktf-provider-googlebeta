# `googleComputeGlobalAddress` Submodule <a name="`googleComputeGlobalAddress` Submodule" id="@cdktf/provider-google-beta.googleComputeGlobalAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeGlobalAddress <a name="GoogleComputeGlobalAddress" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address google_compute_global_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_address

googleComputeGlobalAddress.GoogleComputeGlobalAddress(
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
  address: str = None,
  address_type: str = None,
  description: str = None,
  id: str = None,
  ip_version: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  prefix_length: typing.Union[int, float] = None,
  project: str = None,
  purpose: str = None,
  timeouts: GoogleComputeGlobalAddressTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.address">address</a></code> | <code>str</code> | The IP address or beginning of the address range represented by this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.addressType">address_type</a></code> | <code>str</code> | The type of the address to reserve. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#id GoogleComputeGlobalAddress#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.ipVersion">ip_version</a></code> | <code>str</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this address.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.network">network</a></code> | <code>str</code> | The URL of the network in which to reserve the IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | The prefix length of the IP range. If not present, it means the address field is a single IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#project GoogleComputeGlobalAddress#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | The purpose of the resource. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts">GoogleComputeGlobalAddressTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#name GoogleComputeGlobalAddress#name}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.address"></a>

- *Type:* str

The IP address or beginning of the address range represented by this resource.

This can be supplied as an input to reserve a specific
address or omitted to allow GCP to choose a valid one for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#address GoogleComputeGlobalAddress#address}

---

##### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.addressType"></a>

- *Type:* str

The type of the address to reserve.

* EXTERNAL indicates public/external single IP address.
* INTERNAL indicates internal IP ranges belonging to some network. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#address_type GoogleComputeGlobalAddress#address_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#description GoogleComputeGlobalAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#id GoogleComputeGlobalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.ipVersion"></a>

- *Type:* str

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#ip_version GoogleComputeGlobalAddress#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this address.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#labels GoogleComputeGlobalAddress#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.network"></a>

- *Type:* str

The URL of the network in which to reserve the IP range.

The IP range
must be in RFC1918 space. The network cannot be deleted if there are
any reserved IP ranges referring to it.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#network GoogleComputeGlobalAddress#network}

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.prefixLength"></a>

- *Type:* typing.Union[int, float]

The prefix length of the IP range. If not present, it means the address field is a single IP address.

This field is not applicable to addresses with addressType=INTERNAL
when purpose=PRIVATE_SERVICE_CONNECT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#prefix_length GoogleComputeGlobalAddress#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#project GoogleComputeGlobalAddress#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.purpose"></a>

- *Type:* str

The purpose of the resource. Possible values include:.

* VPC_PEERING - for peer networks
* PRIVATE_SERVICE_CONNECT - for ([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html) only) Private Service Connect networks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#purpose GoogleComputeGlobalAddress#purpose}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts">GoogleComputeGlobalAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#timeouts GoogleComputeGlobalAddress#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetAddressType">reset_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetPrefixLength">reset_prefix_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetPurpose">reset_purpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#create GoogleComputeGlobalAddress#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#delete GoogleComputeGlobalAddress#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#update GoogleComputeGlobalAddress#update}.

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_address_type` <a name="reset_address_type" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetAddressType"></a>

```python
def reset_address_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_prefix_length` <a name="reset_prefix_length" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetPrefixLength"></a>

```python
def reset_prefix_length() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_purpose` <a name="reset_purpose" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetPurpose"></a>

```python
def reset_purpose() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeGlobalAddress resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_address

googleComputeGlobalAddress.GoogleComputeGlobalAddress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_address

googleComputeGlobalAddress.GoogleComputeGlobalAddress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_address

googleComputeGlobalAddress.GoogleComputeGlobalAddress.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_address

googleComputeGlobalAddress.GoogleComputeGlobalAddress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeGlobalAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeGlobalAddress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeGlobalAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeGlobalAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference">GoogleComputeGlobalAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.addressTypeInput">address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.ipVersionInput">ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.prefixLengthInput">prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts">GoogleComputeGlobalAddressTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.addressType">address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.timeouts"></a>

```python
timeouts: GoogleComputeGlobalAddressTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference">GoogleComputeGlobalAddressTimeoutsOutputReference</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address_type_input`<sup>Optional</sup> <a name="address_type_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.addressTypeInput"></a>

```python
address_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.ipVersionInput"></a>

```python
ip_version_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `prefix_length_input`<sup>Optional</sup> <a name="prefix_length_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.prefixLengthInput"></a>

```python
prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeGlobalAddressTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts">GoogleComputeGlobalAddressTimeouts</a>]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.addressType"></a>

```python
address_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `prefix_length`<sup>Required</sup> <a name="prefix_length" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeGlobalAddressConfig <a name="GoogleComputeGlobalAddressConfig" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_address

googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  address: str = None,
  address_type: str = None,
  description: str = None,
  id: str = None,
  ip_version: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  prefix_length: typing.Union[int, float] = None,
  project: str = None,
  purpose: str = None,
  timeouts: GoogleComputeGlobalAddressTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.address">address</a></code> | <code>str</code> | The IP address or beginning of the address range represented by this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.addressType">address_type</a></code> | <code>str</code> | The type of the address to reserve. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#id GoogleComputeGlobalAddress#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.ipVersion">ip_version</a></code> | <code>str</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this address.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.network">network</a></code> | <code>str</code> | The URL of the network in which to reserve the IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | The prefix length of the IP range. If not present, it means the address field is a single IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#project GoogleComputeGlobalAddress#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.purpose">purpose</a></code> | <code>str</code> | The purpose of the resource. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts">GoogleComputeGlobalAddressTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#name GoogleComputeGlobalAddress#name}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The IP address or beginning of the address range represented by this resource.

This can be supplied as an input to reserve a specific
address or omitted to allow GCP to choose a valid one for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#address GoogleComputeGlobalAddress#address}

---

##### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.addressType"></a>

```python
address_type: str
```

- *Type:* str

The type of the address to reserve.

* EXTERNAL indicates public/external single IP address.
* INTERNAL indicates internal IP ranges belonging to some network. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#address_type GoogleComputeGlobalAddress#address_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#description GoogleComputeGlobalAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#id GoogleComputeGlobalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#ip_version GoogleComputeGlobalAddress#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this address.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#labels GoogleComputeGlobalAddress#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The URL of the network in which to reserve the IP range.

The IP range
must be in RFC1918 space. The network cannot be deleted if there are
any reserved IP ranges referring to it.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#network GoogleComputeGlobalAddress#network}

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The prefix length of the IP range. If not present, it means the address field is a single IP address.

This field is not applicable to addresses with addressType=INTERNAL
when purpose=PRIVATE_SERVICE_CONNECT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#prefix_length GoogleComputeGlobalAddress#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#project GoogleComputeGlobalAddress#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

The purpose of the resource. Possible values include:.

* VPC_PEERING - for peer networks
* PRIVATE_SERVICE_CONNECT - for ([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html) only) Private Service Connect networks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#purpose GoogleComputeGlobalAddress#purpose}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeGlobalAddressTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts">GoogleComputeGlobalAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#timeouts GoogleComputeGlobalAddress#timeouts}

---

### GoogleComputeGlobalAddressTimeouts <a name="GoogleComputeGlobalAddressTimeouts" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_address

googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#create GoogleComputeGlobalAddress#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#delete GoogleComputeGlobalAddress#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#update GoogleComputeGlobalAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#create GoogleComputeGlobalAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#delete GoogleComputeGlobalAddress#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_global_address#update GoogleComputeGlobalAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeGlobalAddressTimeoutsOutputReference <a name="GoogleComputeGlobalAddressTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_global_address

googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts">GoogleComputeGlobalAddressTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeGlobalAddressTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeGlobalAddress.GoogleComputeGlobalAddressTimeouts">GoogleComputeGlobalAddressTimeouts</a>]

---



