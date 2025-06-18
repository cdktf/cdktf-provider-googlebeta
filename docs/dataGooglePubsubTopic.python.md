# `dataGooglePubsubTopic` Submodule <a name="`dataGooglePubsubTopic` Submodule" id="@cdktf/provider-google-beta.dataGooglePubsubTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePubsubTopic <a name="DataGooglePubsubTopic" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic google_pubsub_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopic(
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
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#id DataGooglePubsubTopic#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#project DataGooglePubsubTopic#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.name"></a>

- *Type:* str

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#name DataGooglePubsubTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#id DataGooglePubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#project DataGooglePubsubTopic#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGooglePubsubTopic resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopic.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGooglePubsubTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGooglePubsubTopic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGooglePubsubTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGooglePubsubTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.ingestionDataSourceSettings">ingestion_data_source_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList">DataGooglePubsubTopicIngestionDataSourceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageStoragePolicy">message_storage_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList">DataGooglePubsubTopicMessageStoragePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageTransforms">message_transforms</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList">DataGooglePubsubTopicMessageTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.schemaSettings">schema_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList">DataGooglePubsubTopicSchemaSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ingestion_data_source_settings`<sup>Required</sup> <a name="ingestion_data_source_settings" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.ingestionDataSourceSettings"></a>

```python
ingestion_data_source_settings: DataGooglePubsubTopicIngestionDataSourceSettingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList">DataGooglePubsubTopicIngestionDataSourceSettingsList</a>

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `message_retention_duration`<sup>Required</sup> <a name="message_retention_duration" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageRetentionDuration"></a>

```python
message_retention_duration: str
```

- *Type:* str

---

##### `message_storage_policy`<sup>Required</sup> <a name="message_storage_policy" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageStoragePolicy"></a>

```python
message_storage_policy: DataGooglePubsubTopicMessageStoragePolicyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList">DataGooglePubsubTopicMessageStoragePolicyList</a>

---

##### `message_transforms`<sup>Required</sup> <a name="message_transforms" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.messageTransforms"></a>

```python
message_transforms: DataGooglePubsubTopicMessageTransformsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList">DataGooglePubsubTopicMessageTransformsList</a>

---

##### `schema_settings`<sup>Required</sup> <a name="schema_settings" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.schemaSettings"></a>

```python
schema_settings: DataGooglePubsubTopicSchemaSettingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList">DataGooglePubsubTopicSchemaSettingsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePubsubTopicConfig <a name="DataGooglePubsubTopicConfig" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.name">name</a></code> | <code>str</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#id DataGooglePubsubTopic#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#project DataGooglePubsubTopic#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#name DataGooglePubsubTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#id DataGooglePubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_pubsub_topic#project DataGooglePubsubTopic#project}.

---

### DataGooglePubsubTopicIngestionDataSourceSettings <a name="DataGooglePubsubTopicIngestionDataSourceSettings" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettings()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud <a name="DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud()
```


### DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings <a name="DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings()
```


### DataGooglePubsubTopicMessageStoragePolicy <a name="DataGooglePubsubTopicMessageStoragePolicy" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy()
```


### DataGooglePubsubTopicMessageTransforms <a name="DataGooglePubsubTopicMessageTransforms" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransforms.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransforms()
```


### DataGooglePubsubTopicMessageTransformsJavascriptUdf <a name="DataGooglePubsubTopicMessageTransformsJavascriptUdf" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdf.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdf()
```


### DataGooglePubsubTopicSchemaSettings <a name="DataGooglePubsubTopicSchemaSettings" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn">consumer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

---

##### `consumer_arn`<sup>Required</sup> <a name="consumer_arn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn"></a>

```python
consumer_arn: str
```

- *Type:* str

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis">DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk">DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk">DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub">event_hub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs">DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `event_hub`<sup>Required</sup> <a name="event_hub" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub"></a>

```python
event_hub: str
```

- *Type:* str

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs">DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat">avro_format</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob">match_glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime">minimum_object_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat">pubsub_avro_format</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat">text_format</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro_format`<sup>Required</sup> <a name="avro_format" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat"></a>

```python
avro_format: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `match_glob`<sup>Required</sup> <a name="match_glob" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob"></a>

```python
match_glob: str
```

- *Type:* str

---

##### `minimum_object_create_time`<sup>Required</sup> <a name="minimum_object_create_time" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime"></a>

```python
minimum_object_create_time: str
```

- *Type:* str

---

##### `pubsub_avro_format`<sup>Required</sup> <a name="pubsub_avro_format" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat"></a>

```python
pubsub_avro_format: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList</a>

---

##### `text_format`<sup>Required</sup> <a name="text_format" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat"></a>

```python
text_format: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer">bootstrap_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud">DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bootstrap_server`<sup>Required</sup> <a name="bootstrap_server" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer"></a>

```python
bootstrap_server: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud">DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis">aws_kinesis</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList">DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk">aws_msk</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList">DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs">azure_event_hubs</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList">DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage">cloud_storage</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud">confluent_cloud</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList">DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings">platform_logs_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList">DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettings">DataGooglePubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_kinesis`<sup>Required</sup> <a name="aws_kinesis" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis"></a>

```python
aws_kinesis: DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList">DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList</a>

---

##### `aws_msk`<sup>Required</sup> <a name="aws_msk" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk"></a>

```python
aws_msk: DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList">DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList</a>

---

##### `azure_event_hubs`<sup>Required</sup> <a name="azure_event_hubs" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs"></a>

```python
azure_event_hubs: DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList">DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList</a>

---

##### `cloud_storage`<sup>Required</sup> <a name="cloud_storage" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage"></a>

```python
cloud_storage: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList">DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList</a>

---

##### `confluent_cloud`<sup>Required</sup> <a name="confluent_cloud" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud"></a>

```python
confluent_cloud: DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList">DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList</a>

---

##### `platform_logs_settings`<sup>Required</sup> <a name="platform_logs_settings" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings"></a>

```python
platform_logs_settings: DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList">DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettings">DataGooglePubsubTopicIngestionDataSourceSettings</a>

---


### DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList <a name="DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference <a name="DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---


### DataGooglePubsubTopicMessageStoragePolicyList <a name="DataGooglePubsubTopicMessageStoragePolicyList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicMessageStoragePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicMessageStoragePolicyOutputReference <a name="DataGooglePubsubTopicMessageStoragePolicyOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions">allowed_persistence_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit">enforce_in_transit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy">DataGooglePubsubTopicMessageStoragePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_persistence_regions`<sup>Required</sup> <a name="allowed_persistence_regions" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions"></a>

```python
allowed_persistence_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforce_in_transit`<sup>Required</sup> <a name="enforce_in_transit" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit"></a>

```python
enforce_in_transit: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicMessageStoragePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageStoragePolicy">DataGooglePubsubTopicMessageStoragePolicy</a>

---


### DataGooglePubsubTopicMessageTransformsJavascriptUdfList <a name="DataGooglePubsubTopicMessageTransformsJavascriptUdfList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference <a name="DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdf">DataGooglePubsubTopicMessageTransformsJavascriptUdf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicMessageTransformsJavascriptUdf
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdf">DataGooglePubsubTopicMessageTransformsJavascriptUdf</a>

---


### DataGooglePubsubTopicMessageTransformsList <a name="DataGooglePubsubTopicMessageTransformsList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicMessageTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicMessageTransformsOutputReference <a name="DataGooglePubsubTopicMessageTransformsOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.javascriptUdf">javascript_udf</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList">DataGooglePubsubTopicMessageTransformsJavascriptUdfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransforms">DataGooglePubsubTopicMessageTransforms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `javascript_udf`<sup>Required</sup> <a name="javascript_udf" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.javascriptUdf"></a>

```python
javascript_udf: DataGooglePubsubTopicMessageTransformsJavascriptUdfList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsJavascriptUdfList">DataGooglePubsubTopicMessageTransformsJavascriptUdfList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransformsOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicMessageTransforms
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicMessageTransforms">DataGooglePubsubTopicMessageTransforms</a>

---


### DataGooglePubsubTopicSchemaSettingsList <a name="DataGooglePubsubTopicSchemaSettingsList" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGooglePubsubTopicSchemaSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGooglePubsubTopicSchemaSettingsOutputReference <a name="DataGooglePubsubTopicSchemaSettingsOutputReference" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_pubsub_topic

dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings">DataGooglePubsubTopicSchemaSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataGooglePubsubTopicSchemaSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGooglePubsubTopic.DataGooglePubsubTopicSchemaSettings">DataGooglePubsubTopicSchemaSettings</a>

---



