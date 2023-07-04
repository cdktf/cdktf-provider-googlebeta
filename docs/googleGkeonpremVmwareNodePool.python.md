# `google_gkeonprem_vmware_node_pool`

Refer to the Terraform Registory for docs: [`google_gkeonprem_vmware_node_pool`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool).

# `googleGkeonpremVmwareNodePool` Submodule <a name="`googleGkeonpremVmwareNodePool` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremVmwareNodePool <a name="GoogleGkeonpremVmwareNodePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: GoogleGkeonpremVmwareNodePoolConfigA,
  location: str,
  name: str,
  vmware_cluster: str,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  node_pool_autoscaling: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling = None,
  project: str = None,
  timeouts: GoogleGkeonpremVmwareNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.vmwareCluster">vmware_cluster</a></code> | <code>str</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.nodePoolAutoscaling">node_pool_autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#config GoogleGkeonpremVmwareNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#location GoogleGkeonpremVmwareNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.name"></a>

- *Type:* str

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#name GoogleGkeonpremVmwareNodePool#name}

---

##### `vmware_cluster`<sup>Required</sup> <a name="vmware_cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.vmwareCluster"></a>

- *Type:* str

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#vmware_cluster GoogleGkeonpremVmwareNodePool#vmware_cluster}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#annotations GoogleGkeonpremVmwareNodePool#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#display_name GoogleGkeonpremVmwareNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_pool_autoscaling`<sup>Optional</sup> <a name="node_pool_autoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.nodePoolAutoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#node_pool_autoscaling GoogleGkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#timeouts GoogleGkeonpremVmwareNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling">put_node_pool_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetNodePoolAutoscaling">reset_node_pool_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig"></a>

```python
def put_config(
  image_type: str,
  boot_disk_size_gb: typing.Union[int, float] = None,
  cpus: typing.Union[int, float] = None,
  enable_load_balancer: typing.Union[bool, IResolvable] = None,
  image: str = None,
  labels: typing.Mapping[str] = None,
  memory_mb: typing.Union[int, float] = None,
  replicas: typing.Union[int, float] = None,
  taints: typing.Union[IResolvable, typing.List[GoogleGkeonpremVmwareNodePoolConfigTaints]] = None
) -> None
```

###### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.imageType"></a>

- *Type:* str

The OS image to be used for each node in a node pool.

Currently 'cos', 'ubuntu', 'ubuntu_containerd' and 'windows' are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#image_type GoogleGkeonpremVmwareNodePool#image_type}

---

###### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.bootDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

VMware disk size to be used during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#boot_disk_size_gb GoogleGkeonpremVmwareNodePool#boot_disk_size_gb}

---

###### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.cpus"></a>

- *Type:* typing.Union[int, float]

The number of CPUs for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#cpus GoogleGkeonpremVmwareNodePool#cpus}

---

###### `enable_load_balancer`<sup>Optional</sup> <a name="enable_load_balancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.enableLoadBalancer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#enable_load_balancer GoogleGkeonpremVmwareNodePool#enable_load_balancer}

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.image"></a>

- *Type:* str

The OS image name in vCenter, only valid when using Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#image GoogleGkeonpremVmwareNodePool#image}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#labels GoogleGkeonpremVmwareNodePool#labels}

---

###### `memory_mb`<sup>Optional</sup> <a name="memory_mb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.memoryMb"></a>

- *Type:* typing.Union[int, float]

The megabytes of memory for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#memory_mb GoogleGkeonpremVmwareNodePool#memory_mb}

---

###### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.replicas"></a>

- *Type:* typing.Union[int, float]

The number of nodes in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#replicas GoogleGkeonpremVmwareNodePool#replicas}

---

###### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putConfig.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#taints GoogleGkeonpremVmwareNodePool#taints}

---

##### `put_node_pool_autoscaling` <a name="put_node_pool_autoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling"></a>

```python
def put_node_pool_autoscaling(
  max_replicas: typing.Union[int, float],
  min_replicas: typing.Union[int, float]
) -> None
```

###### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling.parameter.maxReplicas"></a>

- *Type:* typing.Union[int, float]

Maximum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#max_replicas GoogleGkeonpremVmwareNodePool#max_replicas}

---

###### `min_replicas`<sup>Required</sup> <a name="min_replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putNodePoolAutoscaling.parameter.minReplicas"></a>

- *Type:* typing.Union[int, float]

Minimum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#min_replicas GoogleGkeonpremVmwareNodePool#min_replicas}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#create GoogleGkeonpremVmwareNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#delete GoogleGkeonpremVmwareNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#update GoogleGkeonpremVmwareNodePool#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_pool_autoscaling` <a name="reset_node_pool_autoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetNodePoolAutoscaling"></a>

```python
def reset_node_pool_autoscaling() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference">GoogleGkeonpremVmwareNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscaling">node_pool_autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.onPremVersion">on_prem_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList">GoogleGkeonpremVmwareNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference">GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscalingInput">node_pool_autoscaling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareClusterInput">vmware_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareCluster">vmware_cluster</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.config"></a>

```python
config: GoogleGkeonpremVmwareNodePoolConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference">GoogleGkeonpremVmwareNodePoolConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `node_pool_autoscaling`<sup>Required</sup> <a name="node_pool_autoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscaling"></a>

```python
node_pool_autoscaling: GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a>

---

##### `on_prem_version`<sup>Required</sup> <a name="on_prem_version" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.onPremVersion"></a>

```python
on_prem_version: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.status"></a>

```python
status: GoogleGkeonpremVmwareNodePoolStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList">GoogleGkeonpremVmwareNodePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeouts"></a>

```python
timeouts: GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference">GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.configInput"></a>

```python
config_input: GoogleGkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_pool_autoscaling_input`<sup>Optional</sup> <a name="node_pool_autoscaling_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.nodePoolAutoscalingInput"></a>

```python
node_pool_autoscaling_input: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleGkeonpremVmwareNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>]

---

##### `vmware_cluster_input`<sup>Optional</sup> <a name="vmware_cluster_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareClusterInput"></a>

```python
vmware_cluster_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `vmware_cluster`<sup>Required</sup> <a name="vmware_cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.vmwareCluster"></a>

```python
vmware_cluster: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremVmwareNodePoolConfig <a name="GoogleGkeonpremVmwareNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  config: GoogleGkeonpremVmwareNodePoolConfigA,
  location: str,
  name: str,
  vmware_cluster: str,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  node_pool_autoscaling: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling = None,
  project: str = None,
  timeouts: GoogleGkeonpremVmwareNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.name">name</a></code> | <code>str</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.vmwareCluster">vmware_cluster</a></code> | <code>str</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling">node_pool_autoscaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.config"></a>

```python
config: GoogleGkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#config GoogleGkeonpremVmwareNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#location GoogleGkeonpremVmwareNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#name GoogleGkeonpremVmwareNodePool#name}

---

##### `vmware_cluster`<sup>Required</sup> <a name="vmware_cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.vmwareCluster"></a>

```python
vmware_cluster: str
```

- *Type:* str

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#vmware_cluster GoogleGkeonpremVmwareNodePool#vmware_cluster}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#annotations GoogleGkeonpremVmwareNodePool#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#display_name GoogleGkeonpremVmwareNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#id GoogleGkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_pool_autoscaling`<sup>Optional</sup> <a name="node_pool_autoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling"></a>

```python
node_pool_autoscaling: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#node_pool_autoscaling GoogleGkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#project GoogleGkeonpremVmwareNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfig.property.timeouts"></a>

```python
timeouts: GoogleGkeonpremVmwareNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#timeouts GoogleGkeonpremVmwareNodePool#timeouts}

---

### GoogleGkeonpremVmwareNodePoolConfigA <a name="GoogleGkeonpremVmwareNodePoolConfigA" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA(
  image_type: str,
  boot_disk_size_gb: typing.Union[int, float] = None,
  cpus: typing.Union[int, float] = None,
  enable_load_balancer: typing.Union[bool, IResolvable] = None,
  image: str = None,
  labels: typing.Mapping[str] = None,
  memory_mb: typing.Union[int, float] = None,
  replicas: typing.Union[int, float] = None,
  taints: typing.Union[IResolvable, typing.List[GoogleGkeonpremVmwareNodePoolConfigTaints]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.imageType">image_type</a></code> | <code>str</code> | The OS image to be used for each node in a node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | VMware disk size to be used during creation. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.cpus">cpus</a></code> | <code>typing.Union[int, float]</code> | The number of CPUs for each node in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer">enable_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.image">image</a></code> | <code>str</code> | The OS image name in vCenter, only valid when using Windows. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.memoryMb">memory_mb</a></code> | <code>typing.Union[int, float]</code> | The megabytes of memory for each node in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in the node pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]]</code> | taints block. |

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

The OS image to be used for each node in a node pool.

Currently 'cos', 'ubuntu', 'ubuntu_containerd' and 'windows' are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#image_type GoogleGkeonpremVmwareNodePool#image_type}

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

VMware disk size to be used during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#boot_disk_size_gb GoogleGkeonpremVmwareNodePool#boot_disk_size_gb}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.cpus"></a>

```python
cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPUs for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#cpus GoogleGkeonpremVmwareNodePool#cpus}

---

##### `enable_load_balancer`<sup>Optional</sup> <a name="enable_load_balancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer"></a>

```python
enable_load_balancer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#enable_load_balancer GoogleGkeonpremVmwareNodePool#enable_load_balancer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.image"></a>

```python
image: str
```

- *Type:* str

The OS image name in vCenter, only valid when using Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#image GoogleGkeonpremVmwareNodePool#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#labels GoogleGkeonpremVmwareNodePool#labels}

---

##### `memory_mb`<sup>Optional</sup> <a name="memory_mb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.memoryMb"></a>

```python
memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The megabytes of memory for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#memory_mb GoogleGkeonpremVmwareNodePool#memory_mb}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#replicas GoogleGkeonpremVmwareNodePool#replicas}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[GoogleGkeonpremVmwareNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#taints GoogleGkeonpremVmwareNodePool#taints}

---

### GoogleGkeonpremVmwareNodePoolConfigTaints <a name="GoogleGkeonpremVmwareNodePoolConfigTaints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints(
  key: str,
  value: str,
  effect: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.key">key</a></code> | <code>str</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.value">value</a></code> | <code>str</code> | Value associated with the effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.effect">effect</a></code> | <code>str</code> | Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.key"></a>

```python
key: str
```

- *Type:* str

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#key GoogleGkeonpremVmwareNodePool#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.value"></a>

```python
value: str
```

- *Type:* str

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#value GoogleGkeonpremVmwareNodePool#value}

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints.property.effect"></a>

```python
effect: str
```

- *Type:* str

Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#effect GoogleGkeonpremVmwareNodePool#effect}

---

### GoogleGkeonpremVmwareNodePoolConfigVsphereConfig <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig()
```


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags()
```


### GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling <a name="GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling(
  max_replicas: typing.Union[int, float],
  min_replicas: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | Maximum number of replicas in the NodePool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas">min_replicas</a></code> | <code>typing.Union[int, float]</code> | Minimum number of replicas in the NodePool. |

---

##### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#max_replicas GoogleGkeonpremVmwareNodePool#max_replicas}

---

##### `min_replicas`<sup>Required</sup> <a name="min_replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas"></a>

```python
min_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#min_replicas GoogleGkeonpremVmwareNodePool#min_replicas}

---

### GoogleGkeonpremVmwareNodePoolStatus <a name="GoogleGkeonpremVmwareNodePoolStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus()
```


### GoogleGkeonpremVmwareNodePoolStatusConditions <a name="GoogleGkeonpremVmwareNodePoolStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions()
```


### GoogleGkeonpremVmwareNodePoolTimeouts <a name="GoogleGkeonpremVmwareNodePoolTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#create GoogleGkeonpremVmwareNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#delete GoogleGkeonpremVmwareNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#update GoogleGkeonpremVmwareNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#create GoogleGkeonpremVmwareNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#delete GoogleGkeonpremVmwareNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_gkeonprem_vmware_node_pool#update GoogleGkeonpremVmwareNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremVmwareNodePoolConfigAOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigAOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetCpus">reset_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer">reset_enable_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb">reset_memory_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas">reset_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetTaints">reset_taints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_taints` <a name="put_taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[GoogleGkeonpremVmwareNodePoolConfigTaints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]]

---

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_cpus` <a name="reset_cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetCpus"></a>

```python
def reset_cpus() -> None
```

##### `reset_enable_load_balancer` <a name="reset_enable_load_balancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer"></a>

```python
def reset_enable_load_balancer() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_memory_mb` <a name="reset_memory_mb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb"></a>

```python
def reset_memory_mb() -> None
```

##### `reset_replicas` <a name="reset_replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas"></a>

```python
def reset_replicas() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.resetTaints"></a>

```python
def reset_taints() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList">GoogleGkeonpremVmwareNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig">vsphere_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput">cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput">enable_load_balancer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput">image_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput">memory_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput">replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpus">cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer">enable_load_balancer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb">memory_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taints"></a>

```python
taints: GoogleGkeonpremVmwareNodePoolConfigTaintsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList">GoogleGkeonpremVmwareNodePoolConfigTaintsList</a>

---

##### `vsphere_config`<sup>Required</sup> <a name="vsphere_config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig"></a>

```python
vsphere_config: GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList</a>

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus_input`<sup>Optional</sup> <a name="cpus_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput"></a>

```python
cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_load_balancer_input`<sup>Optional</sup> <a name="enable_load_balancer_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput"></a>

```python
enable_load_balancer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image_type_input`<sup>Optional</sup> <a name="image_type_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```python
image_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `memory_mb_input`<sup>Optional</sup> <a name="memory_mb_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput"></a>

```python
memory_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replicas_input`<sup>Optional</sup> <a name="replicas_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput"></a>

```python
replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[GoogleGkeonpremVmwareNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]]

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.cpus"></a>

```python
cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_load_balancer`<sup>Required</sup> <a name="enable_load_balancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer"></a>

```python
enable_load_balancer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `memory_mb`<sup>Required</sup> <a name="memory_mb" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb"></a>

```python
memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeonpremVmwareNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigA">GoogleGkeonpremVmwareNodePoolConfigA</a>

---


### GoogleGkeonpremVmwareNodePoolConfigTaintsList <a name="GoogleGkeonpremVmwareNodePoolConfigTaintsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleGkeonpremVmwareNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]]

---


### GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect">reset_effect</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effect` <a name="reset_effect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeonpremVmwareNodePoolConfigTaints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigTaints">GoogleGkeonpremVmwareNodePoolConfigTaints</a>]

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore">datastore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore"></a>

```python
datastore: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags"></a>

```python
tags: GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeonpremVmwareNodePoolConfigVsphereConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfig">GoogleGkeonpremVmwareNodePoolConfigVsphereConfig</a>

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference <a name="GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags">GoogleGkeonpremVmwareNodePoolConfigVsphereConfigTags</a>

---


### GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference <a name="GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput">max_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput">min_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas">min_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_replicas_input`<sup>Optional</sup> <a name="max_replicas_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput"></a>

```python
max_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replicas_input`<sup>Optional</sup> <a name="min_replicas_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput"></a>

```python
min_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replicas`<sup>Required</sup> <a name="min_replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas"></a>

```python
min_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling">GoogleGkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---


### GoogleGkeonpremVmwareNodePoolStatusConditionsList <a name="GoogleGkeonpremVmwareNodePoolStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions">GoogleGkeonpremVmwareNodePoolStatusConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeonpremVmwareNodePoolStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditions">GoogleGkeonpremVmwareNodePoolStatusConditions</a>

---


### GoogleGkeonpremVmwareNodePoolStatusList <a name="GoogleGkeonpremVmwareNodePoolStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleGkeonpremVmwareNodePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleGkeonpremVmwareNodePoolStatusOutputReference <a name="GoogleGkeonpremVmwareNodePoolStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList">GoogleGkeonpremVmwareNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus">GoogleGkeonpremVmwareNodePoolStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.conditions"></a>

```python
conditions: GoogleGkeonpremVmwareNodePoolStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusConditionsList">GoogleGkeonpremVmwareNodePoolStatusConditionsList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGkeonpremVmwareNodePoolStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolStatus">GoogleGkeonpremVmwareNodePoolStatus</a>

---


### GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference <a name="GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_gkeonprem_vmware_node_pool

googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleGkeonpremVmwareNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareNodePool.GoogleGkeonpremVmwareNodePoolTimeouts">GoogleGkeonpremVmwareNodePoolTimeouts</a>]

---



