# `googleVmwareengineCluster` Submodule <a name="`googleVmwareengineCluster` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineCluster <a name="GoogleVmwareengineCluster" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster google_vmwareengine_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineCluster(
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
  parent: str,
  autoscaling_settings: GoogleVmwareengineClusterAutoscalingSettings = None,
  id: str = None,
  node_type_configs: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterNodeTypeConfigs]] = None,
  timeouts: GoogleVmwareengineClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.autoscalingSettings">autoscaling_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a></code> | autoscaling_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#id GoogleVmwareengineCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.nodeTypeConfigs">node_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]</code> | node_type_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.name"></a>

- *Type:* str

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#name GoogleVmwareengineCluster#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.parent"></a>

- *Type:* str

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#parent GoogleVmwareengineCluster#parent}

---

##### `autoscaling_settings`<sup>Optional</sup> <a name="autoscaling_settings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.autoscalingSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a>

autoscaling_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#autoscaling_settings GoogleVmwareengineCluster#autoscaling_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#id GoogleVmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_type_configs`<sup>Optional</sup> <a name="node_type_configs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.nodeTypeConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#node_type_configs GoogleVmwareengineCluster#node_type_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#timeouts GoogleVmwareengineCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings">put_autoscaling_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putNodeTypeConfigs">put_node_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetAutoscalingSettings">reset_autoscaling_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetNodeTypeConfigs">reset_node_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaling_settings` <a name="put_autoscaling_settings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings"></a>

```python
def put_autoscaling_settings(
  autoscaling_policies: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies]],
  cool_down_period: str = None,
  max_cluster_node_count: typing.Union[int, float] = None,
  min_cluster_node_count: typing.Union[int, float] = None
) -> None
```

###### `autoscaling_policies`<sup>Required</sup> <a name="autoscaling_policies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings.parameter.autoscalingPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

autoscaling_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#autoscaling_policies GoogleVmwareengineCluster#autoscaling_policies}

---

###### `cool_down_period`<sup>Optional</sup> <a name="cool_down_period" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings.parameter.coolDownPeriod"></a>

- *Type:* str

The minimum duration between consecutive autoscale operations.

It starts once addition or removal of nodes is fully completed.
Minimum cool down period is 30m.
Cool down period must be in whole minutes (for example, 30m, 31m, 50m).
Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#cool_down_period GoogleVmwareengineCluster#cool_down_period}

---

###### `max_cluster_node_count`<sup>Optional</sup> <a name="max_cluster_node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings.parameter.maxClusterNodeCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#max_cluster_node_count GoogleVmwareengineCluster#max_cluster_node_count}

---

###### `min_cluster_node_count`<sup>Optional</sup> <a name="min_cluster_node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putAutoscalingSettings.parameter.minClusterNodeCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#min_cluster_node_count GoogleVmwareengineCluster#min_cluster_node_count}

---

##### `put_node_type_configs` <a name="put_node_type_configs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putNodeTypeConfigs"></a>

```python
def put_node_type_configs(
  value: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterNodeTypeConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putNodeTypeConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#create GoogleVmwareengineCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#delete GoogleVmwareengineCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#update GoogleVmwareengineCluster#update}.

---

##### `reset_autoscaling_settings` <a name="reset_autoscaling_settings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetAutoscalingSettings"></a>

```python
def reset_autoscaling_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_type_configs` <a name="reset_node_type_configs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetNodeTypeConfigs"></a>

```python
def reset_node_type_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVmwareengineCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVmwareengineCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVmwareengineCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVmwareengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.autoscalingSettings">autoscaling_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.management">management</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nodeTypeConfigs">node_type_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList">GoogleVmwareengineClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference">GoogleVmwareengineClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.autoscalingSettingsInput">autoscaling_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nodeTypeConfigsInput">node_type_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_settings`<sup>Required</sup> <a name="autoscaling_settings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.autoscalingSettings"></a>

```python
autoscaling_settings: GoogleVmwareengineClusterAutoscalingSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsOutputReference</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.management"></a>

```python
management: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `node_type_configs`<sup>Required</sup> <a name="node_type_configs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nodeTypeConfigs"></a>

```python
node_type_configs: GoogleVmwareengineClusterNodeTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList">GoogleVmwareengineClusterNodeTypeConfigsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.timeouts"></a>

```python
timeouts: GoogleVmwareengineClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference">GoogleVmwareengineClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `autoscaling_settings_input`<sup>Optional</sup> <a name="autoscaling_settings_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.autoscalingSettingsInput"></a>

```python
autoscaling_settings_input: GoogleVmwareengineClusterAutoscalingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_type_configs_input`<sup>Optional</sup> <a name="node_type_configs_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.nodeTypeConfigsInput"></a>

```python
node_type_configs_input: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVmwareengineClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineClusterAutoscalingSettings <a name="GoogleVmwareengineClusterAutoscalingSettings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings(
  autoscaling_policies: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies]],
  cool_down_period: str = None,
  max_cluster_node_count: typing.Union[int, float] = None,
  min_cluster_node_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.autoscalingPolicies">autoscaling_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]</code> | autoscaling_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.coolDownPeriod">cool_down_period</a></code> | <code>str</code> | The minimum duration between consecutive autoscale operations. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.maxClusterNodeCount">max_cluster_node_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.minClusterNodeCount">min_cluster_node_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster. |

---

##### `autoscaling_policies`<sup>Required</sup> <a name="autoscaling_policies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.autoscalingPolicies"></a>

```python
autoscaling_policies: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

autoscaling_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#autoscaling_policies GoogleVmwareengineCluster#autoscaling_policies}

---

##### `cool_down_period`<sup>Optional</sup> <a name="cool_down_period" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.coolDownPeriod"></a>

```python
cool_down_period: str
```

- *Type:* str

The minimum duration between consecutive autoscale operations.

It starts once addition or removal of nodes is fully completed.
Minimum cool down period is 30m.
Cool down period must be in whole minutes (for example, 30m, 31m, 50m).
Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#cool_down_period GoogleVmwareengineCluster#cool_down_period}

---

##### `max_cluster_node_count`<sup>Optional</sup> <a name="max_cluster_node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.maxClusterNodeCount"></a>

```python
max_cluster_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#max_cluster_node_count GoogleVmwareengineCluster#max_cluster_node_count}

---

##### `min_cluster_node_count`<sup>Optional</sup> <a name="min_cluster_node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings.property.minClusterNodeCount"></a>

```python
min_cluster_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#min_cluster_node_count GoogleVmwareengineCluster#min_cluster_node_count}

---

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies(
  autoscale_policy_id: str,
  node_type_id: str,
  scale_out_size: typing.Union[int, float],
  consumed_memory_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds = None,
  cpu_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds = None,
  storage_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.autoscalePolicyId">autoscale_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#autoscale_policy_id GoogleVmwareengineCluster#autoscale_policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | The canonical identifier of the node type to add or remove. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.scaleOutSize">scale_out_size</a></code> | <code>typing.Union[int, float]</code> | Number of nodes to add to a cluster during a scale-out operation. Must be divisible by 2 for stretched clusters. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.consumedMemoryThresholds">consumed_memory_thresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | consumed_memory_thresholds block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.cpuThresholds">cpu_thresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | cpu_thresholds block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.storageThresholds">storage_thresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | storage_thresholds block. |

---

##### `autoscale_policy_id`<sup>Required</sup> <a name="autoscale_policy_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.autoscalePolicyId"></a>

```python
autoscale_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#autoscale_policy_id GoogleVmwareengineCluster#autoscale_policy_id}.

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

The canonical identifier of the node type to add or remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#node_type_id GoogleVmwareengineCluster#node_type_id}

---

##### `scale_out_size`<sup>Required</sup> <a name="scale_out_size" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.scaleOutSize"></a>

```python
scale_out_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of nodes to add to a cluster during a scale-out operation. Must be divisible by 2 for stretched clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_out_size GoogleVmwareengineCluster#scale_out_size}

---

##### `consumed_memory_thresholds`<sup>Optional</sup> <a name="consumed_memory_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.consumedMemoryThresholds"></a>

```python
consumed_memory_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

consumed_memory_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#consumed_memory_thresholds GoogleVmwareengineCluster#consumed_memory_thresholds}

---

##### `cpu_thresholds`<sup>Optional</sup> <a name="cpu_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.cpuThresholds"></a>

```python
cpu_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

cpu_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#cpu_thresholds GoogleVmwareengineCluster#cpu_thresholds}

---

##### `storage_thresholds`<sup>Optional</sup> <a name="storage_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.storageThresholds"></a>

```python
storage_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

storage_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#storage_thresholds GoogleVmwareengineCluster#storage_thresholds}

---

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

### GoogleVmwareengineClusterConfig <a name="GoogleVmwareengineClusterConfig" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  autoscaling_settings: GoogleVmwareengineClusterAutoscalingSettings = None,
  id: str = None,
  node_type_configs: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterNodeTypeConfigs]] = None,
  timeouts: GoogleVmwareengineClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.name">name</a></code> | <code>str</code> | The ID of the Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.parent">parent</a></code> | <code>str</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.autoscalingSettings">autoscaling_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a></code> | autoscaling_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#id GoogleVmwareengineCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.nodeTypeConfigs">node_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]</code> | node_type_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#name GoogleVmwareengineCluster#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#parent GoogleVmwareengineCluster#parent}

---

##### `autoscaling_settings`<sup>Optional</sup> <a name="autoscaling_settings" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.autoscalingSettings"></a>

```python
autoscaling_settings: GoogleVmwareengineClusterAutoscalingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a>

autoscaling_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#autoscaling_settings GoogleVmwareengineCluster#autoscaling_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#id GoogleVmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_type_configs`<sup>Optional</sup> <a name="node_type_configs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.nodeTypeConfigs"></a>

```python
node_type_configs: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#node_type_configs GoogleVmwareengineCluster#node_type_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterConfig.property.timeouts"></a>

```python
timeouts: GoogleVmwareengineClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#timeouts GoogleVmwareengineCluster#timeouts}

---

### GoogleVmwareengineClusterNodeTypeConfigs <a name="GoogleVmwareengineClusterNodeTypeConfigs" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs(
  node_count: typing.Union[int, float],
  node_type_id: str,
  custom_core_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes of this type in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#node_type_id GoogleVmwareengineCluster#node_type_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.customCoreCount">custom_core_count</a></code> | <code>typing.Union[int, float]</code> | Customized number of cores available to each node of the type. |

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes of this type in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#node_count GoogleVmwareengineCluster#node_count}

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#node_type_id GoogleVmwareengineCluster#node_type_id}.

---

##### `custom_core_count`<sup>Optional</sup> <a name="custom_core_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs.property.customCoreCount"></a>

```python
custom_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Customized number of cores available to each node of the type.

This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
Once the customer is created then corecount cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#custom_core_count GoogleVmwareengineCluster#custom_core_count}

---

### GoogleVmwareengineClusterTimeouts <a name="GoogleVmwareengineClusterTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#create GoogleVmwareengineCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#delete GoogleVmwareengineCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#update GoogleVmwareengineCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#create GoogleVmwareengineCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#delete GoogleVmwareengineCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#update GoogleVmwareengineCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleInInput">scale_in_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOutInput">scale_out_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_input`<sup>Optional</sup> <a name="scale_in_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleInInput"></a>

```python
scale_in_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_input`<sup>Optional</sup> <a name="scale_out_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOutInput"></a>

```python
scale_out_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---


### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleInInput">scale_in_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOutInput">scale_out_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_input`<sup>Optional</sup> <a name="scale_in_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleInInput"></a>

```python
scale_in_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_input`<sup>Optional</sup> <a name="scale_out_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOutInput"></a>

```python
scale_out_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---


### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

---


### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds">put_consumed_memory_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds">put_cpu_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds">put_storage_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetConsumedMemoryThresholds">reset_consumed_memory_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetCpuThresholds">reset_cpu_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetStorageThresholds">reset_storage_thresholds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_consumed_memory_thresholds` <a name="put_consumed_memory_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds"></a>

```python
def put_consumed_memory_thresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
) -> None
```

###### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds.parameter.scaleIn"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

###### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds.parameter.scaleOut"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

##### `put_cpu_thresholds` <a name="put_cpu_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds"></a>

```python
def put_cpu_thresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
) -> None
```

###### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds.parameter.scaleIn"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

###### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds.parameter.scaleOut"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

##### `put_storage_thresholds` <a name="put_storage_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds"></a>

```python
def put_storage_thresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
) -> None
```

###### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds.parameter.scaleIn"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_in GoogleVmwareengineCluster#scale_in}

---

###### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds.parameter.scaleOut"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_vmwareengine_cluster#scale_out GoogleVmwareengineCluster#scale_out}

---

##### `reset_consumed_memory_thresholds` <a name="reset_consumed_memory_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetConsumedMemoryThresholds"></a>

```python
def reset_consumed_memory_thresholds() -> None
```

##### `reset_cpu_thresholds` <a name="reset_cpu_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetCpuThresholds"></a>

```python
def reset_cpu_thresholds() -> None
```

##### `reset_storage_thresholds` <a name="reset_storage_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetStorageThresholds"></a>

```python
def reset_storage_thresholds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds">consumed_memory_thresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds">cpu_thresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds">storage_thresholds</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyIdInput">autoscale_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholdsInput">consumed_memory_thresholds_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholdsInput">cpu_thresholds_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSizeInput">scale_out_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholdsInput">storage_thresholds_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId">autoscale_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize">scale_out_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumed_memory_thresholds`<sup>Required</sup> <a name="consumed_memory_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds"></a>

```python
consumed_memory_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference</a>

---

##### `cpu_thresholds`<sup>Required</sup> <a name="cpu_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds"></a>

```python
cpu_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference</a>

---

##### `storage_thresholds`<sup>Required</sup> <a name="storage_thresholds" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds"></a>

```python
storage_thresholds: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference</a>

---

##### `autoscale_policy_id_input`<sup>Optional</sup> <a name="autoscale_policy_id_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyIdInput"></a>

```python
autoscale_policy_id_input: str
```

- *Type:* str

---

##### `consumed_memory_thresholds_input`<sup>Optional</sup> <a name="consumed_memory_thresholds_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholdsInput"></a>

```python
consumed_memory_thresholds_input: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---

##### `cpu_thresholds_input`<sup>Optional</sup> <a name="cpu_thresholds_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholdsInput"></a>

```python
cpu_thresholds_input: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `scale_out_size_input`<sup>Optional</sup> <a name="scale_out_size_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSizeInput"></a>

```python
scale_out_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_thresholds_input`<sup>Optional</sup> <a name="storage_thresholds_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholdsInput"></a>

```python
storage_thresholds_input: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---

##### `autoscale_policy_id`<sup>Required</sup> <a name="autoscale_policy_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId"></a>

```python
autoscale_policy_id: str
```

- *Type:* str

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `scale_out_size`<sup>Required</sup> <a name="scale_out_size" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize"></a>

```python
scale_out_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]

---


### GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleInInput">scale_in_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOutInput">scale_out_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_input`<sup>Optional</sup> <a name="scale_in_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleInInput"></a>

```python
scale_in_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_input`<sup>Optional</sup> <a name="scale_out_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOutInput"></a>

```python
scale_out_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---


### GoogleVmwareengineClusterAutoscalingSettingsOutputReference <a name="GoogleVmwareengineClusterAutoscalingSettingsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies">put_autoscaling_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetCoolDownPeriod">reset_cool_down_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetMaxClusterNodeCount">reset_max_cluster_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetMinClusterNodeCount">reset_min_cluster_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_policies` <a name="put_autoscaling_policies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies"></a>

```python
def put_autoscaling_policies(
  value: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

---

##### `reset_cool_down_period` <a name="reset_cool_down_period" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetCoolDownPeriod"></a>

```python
def reset_cool_down_period() -> None
```

##### `reset_max_cluster_node_count` <a name="reset_max_cluster_node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetMaxClusterNodeCount"></a>

```python
def reset_max_cluster_node_count() -> None
```

##### `reset_min_cluster_node_count` <a name="reset_min_cluster_node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.resetMinClusterNodeCount"></a>

```python
def reset_min_cluster_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies">autoscaling_policies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPoliciesInput">autoscaling_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriodInput">cool_down_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCountInput">max_cluster_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCountInput">min_cluster_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod">cool_down_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount">max_cluster_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount">min_cluster_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_policies`<sup>Required</sup> <a name="autoscaling_policies" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies"></a>

```python
autoscaling_policies: GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a>

---

##### `autoscaling_policies_input`<sup>Optional</sup> <a name="autoscaling_policies_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPoliciesInput"></a>

```python
autoscaling_policies_input: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">GoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

---

##### `cool_down_period_input`<sup>Optional</sup> <a name="cool_down_period_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriodInput"></a>

```python
cool_down_period_input: str
```

- *Type:* str

---

##### `max_cluster_node_count_input`<sup>Optional</sup> <a name="max_cluster_node_count_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCountInput"></a>

```python
max_cluster_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cluster_node_count_input`<sup>Optional</sup> <a name="min_cluster_node_count_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCountInput"></a>

```python
min_cluster_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cool_down_period`<sup>Required</sup> <a name="cool_down_period" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod"></a>

```python
cool_down_period: str
```

- *Type:* str

---

##### `max_cluster_node_count`<sup>Required</sup> <a name="max_cluster_node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount"></a>

```python
max_cluster_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cluster_node_count`<sup>Required</sup> <a name="min_cluster_node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount"></a>

```python
min_cluster_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVmwareengineClusterAutoscalingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterAutoscalingSettings">GoogleVmwareengineClusterAutoscalingSettings</a>

---


### GoogleVmwareengineClusterNodeTypeConfigsList <a name="GoogleVmwareengineClusterNodeTypeConfigsList" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVmwareengineClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleVmwareengineClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]]

---


### GoogleVmwareengineClusterNodeTypeConfigsOutputReference <a name="GoogleVmwareengineClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resetCustomCoreCount">reset_custom_core_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_core_count` <a name="reset_custom_core_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.resetCustomCoreCount"></a>

```python
def reset_custom_core_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCountInput">custom_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount">custom_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_core_count_input`<sup>Optional</sup> <a name="custom_core_count_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCountInput"></a>

```python
custom_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `custom_core_count`<sup>Required</sup> <a name="custom_core_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```python
custom_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVmwareengineClusterNodeTypeConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterNodeTypeConfigs">GoogleVmwareengineClusterNodeTypeConfigs</a>]

---


### GoogleVmwareengineClusterTimeoutsOutputReference <a name="GoogleVmwareengineClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_cluster

googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVmwareengineClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineCluster.GoogleVmwareengineClusterTimeouts">GoogleVmwareengineClusterTimeouts</a>]

---



