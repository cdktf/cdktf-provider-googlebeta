# `google_compute_region_disk_resource_policy_attachment`

Refer to the Terraform Registory for docs: [`google_compute_region_disk_resource_policy_attachment`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment).

# `googleComputeRegionDiskResourcePolicyAttachment` Submodule <a name="`googleComputeRegionDiskResourcePolicyAttachment` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionDiskResourcePolicyAttachment <a name="GoogleComputeRegionDiskResourcePolicyAttachment" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment google_compute_region_disk_resource_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_disk_resource_policy_attachment

googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: str,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.disk">disk</a></code> | <code>str</code> | The name of the regional disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#id GoogleComputeRegionDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#project GoogleComputeRegionDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region where the disk resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts">GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.disk"></a>

- *Type:* str

The name of the regional disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#disk GoogleComputeRegionDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.name"></a>

- *Type:* str

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#name GoogleComputeRegionDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#id GoogleComputeRegionDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#project GoogleComputeRegionDiskResourcePolicyAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#region GoogleComputeRegionDiskResourcePolicyAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts">GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#timeouts GoogleComputeRegionDiskResourcePolicyAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#create GoogleComputeRegionDiskResourcePolicyAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#delete GoogleComputeRegionDiskResourcePolicyAttachment#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_disk_resource_policy_attachment

googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_disk_resource_policy_attachment

googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_disk_resource_policy_attachment

googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference">GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.diskInput">disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts">GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.disk">disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference">GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference</a>

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.diskInput"></a>

```python
disk_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts">GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts</a>]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.disk"></a>

```python
disk: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionDiskResourcePolicyAttachmentConfig <a name="GoogleComputeRegionDiskResourcePolicyAttachmentConfig" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_disk_resource_policy_attachment

googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: str,
  name: str,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.disk">disk</a></code> | <code>str</code> | The name of the regional disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.name">name</a></code> | <code>str</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#id GoogleComputeRegionDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#project GoogleComputeRegionDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.region">region</a></code> | <code>str</code> | A reference to the region where the disk resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts">GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.disk"></a>

```python
disk: str
```

- *Type:* str

The name of the regional disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#disk GoogleComputeRegionDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#name GoogleComputeRegionDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#id GoogleComputeRegionDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#project GoogleComputeRegionDiskResourcePolicyAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#region GoogleComputeRegionDiskResourcePolicyAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts">GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#timeouts GoogleComputeRegionDiskResourcePolicyAttachment#timeouts}

---

### GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts <a name="GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_disk_resource_policy_attachment

googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#create GoogleComputeRegionDiskResourcePolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#delete GoogleComputeRegionDiskResourcePolicyAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#create GoogleComputeRegionDiskResourcePolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.0/docs/resources/google_compute_region_disk_resource_policy_attachment#delete GoogleComputeRegionDiskResourcePolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference <a name="GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_region_disk_resource_policy_attachment

googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts">GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRegionDiskResourcePolicyAttachment.GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts">GoogleComputeRegionDiskResourcePolicyAttachmentTimeouts</a>]

---



