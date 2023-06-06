# `google_compute_node_template`

Refer to the Terraform Registory for docs: [`google_compute_node_template`](https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template).

# `googleComputeNodeTemplate` Submodule <a name="`googleComputeNodeTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeNodeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNodeTemplate <a name="GoogleComputeNodeTemplate" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template google_compute_node_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cpu_overcommit_type: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  node_affinity_labels: typing.Mapping[str] = None,
  node_type: str = None,
  node_type_flexibility: GoogleComputeNodeTemplateNodeTypeFlexibility = None,
  project: str = None,
  region: str = None,
  server_binding: GoogleComputeNodeTemplateServerBinding = None,
  timeouts: GoogleComputeNodeTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.cpuOvercommitType">cpu_overcommit_type</a></code> | <code>str</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeAffinityLabels">node_affinity_labels</a></code> | <code>typing.Mapping[str]</code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeTypeFlexibility">node_type_flexibility</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.serverBinding">server_binding</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cpu_overcommit_type`<sup>Optional</sup> <a name="cpu_overcommit_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.cpuOvercommitType"></a>

- *Type:* str

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#cpu_overcommit_type GoogleComputeNodeTemplate#cpu_overcommit_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.description"></a>

- *Type:* str

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#description GoogleComputeNodeTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#name GoogleComputeNodeTemplate#name}

---

##### `node_affinity_labels`<sup>Optional</sup> <a name="node_affinity_labels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeAffinityLabels"></a>

- *Type:* typing.Mapping[str]

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#node_affinity_labels GoogleComputeNodeTemplate#node_affinity_labels}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeType"></a>

- *Type:* str

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#node_type GoogleComputeNodeTemplate#node_type}

---

##### `node_type_flexibility`<sup>Optional</sup> <a name="node_type_flexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.nodeTypeFlexibility"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#node_type_flexibility GoogleComputeNodeTemplate#node_type_flexibility}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.region"></a>

- *Type:* str

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#region GoogleComputeNodeTemplate#region}

---

##### `server_binding`<sup>Optional</sup> <a name="server_binding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.serverBinding"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#server_binding GoogleComputeNodeTemplate#server_binding}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#timeouts GoogleComputeNodeTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility">put_node_type_flexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding">put_server_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetCpuOvercommitType">reset_cpu_overcommit_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeAffinityLabels">reset_node_affinity_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeType">reset_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeTypeFlexibility">reset_node_type_flexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetServerBinding">reset_server_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_node_type_flexibility` <a name="put_node_type_flexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility"></a>

```python
def put_node_type_flexibility(
  cpus: str = None,
  memory: str = None
) -> None
```

###### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility.parameter.cpus"></a>

- *Type:* str

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#cpus GoogleComputeNodeTemplate#cpus}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility.parameter.memory"></a>

- *Type:* str

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#memory GoogleComputeNodeTemplate#memory}

---

##### `put_server_binding` <a name="put_server_binding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding"></a>

```python
def put_server_binding(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding.parameter.type"></a>

- *Type:* str

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#type GoogleComputeNodeTemplate#type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#create GoogleComputeNodeTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#delete GoogleComputeNodeTemplate#delete}.

---

##### `reset_cpu_overcommit_type` <a name="reset_cpu_overcommit_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetCpuOvercommitType"></a>

```python
def reset_cpu_overcommit_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_affinity_labels` <a name="reset_node_affinity_labels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeAffinityLabels"></a>

```python
def reset_node_affinity_labels() -> None
```

##### `reset_node_type` <a name="reset_node_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeType"></a>

```python
def reset_node_type() -> None
```

##### `reset_node_type_flexibility` <a name="reset_node_type_flexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeTypeFlexibility"></a>

```python
def reset_node_type_flexibility() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_server_binding` <a name="reset_server_binding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetServerBinding"></a>

```python
def reset_server_binding() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibility">node_type_flexibility</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference">GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBinding">server_binding</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference">GoogleComputeNodeTemplateServerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference">GoogleComputeNodeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitTypeInput">cpu_overcommit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabelsInput">node_affinity_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibilityInput">node_type_flexibility_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBindingInput">server_binding_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitType">cpu_overcommit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabels">node_affinity_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `node_type_flexibility`<sup>Required</sup> <a name="node_type_flexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibility"></a>

```python
node_type_flexibility: GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference">GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `server_binding`<sup>Required</sup> <a name="server_binding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBinding"></a>

```python
server_binding: GoogleComputeNodeTemplateServerBindingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference">GoogleComputeNodeTemplateServerBindingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeouts"></a>

```python
timeouts: GoogleComputeNodeTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference">GoogleComputeNodeTemplateTimeoutsOutputReference</a>

---

##### `cpu_overcommit_type_input`<sup>Optional</sup> <a name="cpu_overcommit_type_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitTypeInput"></a>

```python
cpu_overcommit_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_affinity_labels_input`<sup>Optional</sup> <a name="node_affinity_labels_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabelsInput"></a>

```python
node_affinity_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_type_flexibility_input`<sup>Optional</sup> <a name="node_type_flexibility_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibilityInput"></a>

```python
node_type_flexibility_input: GoogleComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `server_binding_input`<sup>Optional</sup> <a name="server_binding_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBindingInput"></a>

```python
server_binding_input: GoogleComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleComputeNodeTemplateTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>, cdktf.IResolvable]

---

##### `cpu_overcommit_type`<sup>Required</sup> <a name="cpu_overcommit_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitType"></a>

```python
cpu_overcommit_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_affinity_labels`<sup>Required</sup> <a name="node_affinity_labels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabels"></a>

```python
node_affinity_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNodeTemplateConfig <a name="GoogleComputeNodeTemplateConfig" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cpu_overcommit_type: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  node_affinity_labels: typing.Mapping[str] = None,
  node_type: str = None,
  node_type_flexibility: GoogleComputeNodeTemplateNodeTypeFlexibility = None,
  project: str = None,
  region: str = None,
  server_binding: GoogleComputeNodeTemplateServerBinding = None,
  timeouts: GoogleComputeNodeTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.cpuOvercommitType">cpu_overcommit_type</a></code> | <code>str</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.description">description</a></code> | <code>str</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeAffinityLabels">node_affinity_labels</a></code> | <code>typing.Mapping[str]</code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeType">node_type</a></code> | <code>str</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeTypeFlexibility">node_type_flexibility</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.region">region</a></code> | <code>str</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.serverBinding">server_binding</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cpu_overcommit_type`<sup>Optional</sup> <a name="cpu_overcommit_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.cpuOvercommitType"></a>

```python
cpu_overcommit_type: str
```

- *Type:* str

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#cpu_overcommit_type GoogleComputeNodeTemplate#cpu_overcommit_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#description GoogleComputeNodeTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#name GoogleComputeNodeTemplate#name}

---

##### `node_affinity_labels`<sup>Optional</sup> <a name="node_affinity_labels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeAffinityLabels"></a>

```python
node_affinity_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#node_affinity_labels GoogleComputeNodeTemplate#node_affinity_labels}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#node_type GoogleComputeNodeTemplate#node_type}

---

##### `node_type_flexibility`<sup>Optional</sup> <a name="node_type_flexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeTypeFlexibility"></a>

```python
node_type_flexibility: GoogleComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#node_type_flexibility GoogleComputeNodeTemplate#node_type_flexibility}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#region GoogleComputeNodeTemplate#region}

---

##### `server_binding`<sup>Optional</sup> <a name="server_binding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.serverBinding"></a>

```python
server_binding: GoogleComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#server_binding GoogleComputeNodeTemplate#server_binding}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeNodeTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#timeouts GoogleComputeNodeTemplate#timeouts}

---

### GoogleComputeNodeTemplateNodeTypeFlexibility <a name="GoogleComputeNodeTemplateNodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility(
  cpus: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.cpus">cpus</a></code> | <code>str</code> | Number of virtual CPUs to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.memory">memory</a></code> | <code>str</code> | Physical memory available to the node, defined in MB. |

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.cpus"></a>

```python
cpus: str
```

- *Type:* str

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#cpus GoogleComputeNodeTemplate#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.memory"></a>

```python
memory: str
```

- *Type:* str

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#memory GoogleComputeNodeTemplate#memory}

---

### GoogleComputeNodeTemplateServerBinding <a name="GoogleComputeNodeTemplateServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.property.type">type</a></code> | <code>str</code> | Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.property.type"></a>

```python
type: str
```

- *Type:* str

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#type GoogleComputeNodeTemplate#type}

---

### GoogleComputeNodeTemplateTimeouts <a name="GoogleComputeNodeTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#create GoogleComputeNodeTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#delete GoogleComputeNodeTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#create GoogleComputeNodeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_compute_node_template#delete GoogleComputeNodeTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference <a name="GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus">reset_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpus` <a name="reset_cpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus"></a>

```python
def reset_cpus() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd">local_ssd</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput">cpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus">cpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ssd`<sup>Required</sup> <a name="local_ssd" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd"></a>

```python
local_ssd: str
```

- *Type:* str

---

##### `cpus_input`<sup>Optional</sup> <a name="cpus_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput"></a>

```python
cpus_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus"></a>

```python
cpus: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

---


### GoogleComputeNodeTemplateServerBindingOutputReference <a name="GoogleComputeNodeTemplateServerBindingOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

---


### GoogleComputeNodeTemplateTimeoutsOutputReference <a name="GoogleComputeNodeTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_node_template

googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleComputeNodeTemplateTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>, cdktf.IResolvable]

---



