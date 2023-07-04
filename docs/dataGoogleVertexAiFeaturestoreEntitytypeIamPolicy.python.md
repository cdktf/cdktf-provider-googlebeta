# `data_google_vertex_ai_featurestore_entitytype_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_vertex_ai_featurestore_entitytype_iam_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy).

# `dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy` Submodule <a name="`dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy <a name="DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy google_vertex_ai_featurestore_entitytype_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_vertex_ai_featurestore_entitytype_iam_policy

dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entitytype: str,
  featurestore: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.entitytype">entitytype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#entitytype DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#entitytype}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.featurestore">featurestore</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#featurestore DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#featurestore}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#id DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.entitytype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#entitytype DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#entitytype}.

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.featurestore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#featurestore DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#featurestore}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#id DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_vertex_ai_featurestore_entitytype_iam_policy

dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_vertex_ai_featurestore_entitytype_iam_policy

dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_vertex_ai_featurestore_entitytype_iam_policy

dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.entitytypeInput">entitytype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.featurestoreInput">featurestore_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.entitytype">entitytype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.featurestore">featurestore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `entitytype_input`<sup>Optional</sup> <a name="entitytype_input" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.entitytypeInput"></a>

```python
entitytype_input: str
```

- *Type:* str

---

##### `featurestore_input`<sup>Optional</sup> <a name="featurestore_input" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.featurestoreInput"></a>

```python
featurestore_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.entitytype"></a>

```python
entitytype: str
```

- *Type:* str

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.featurestore"></a>

```python
featurestore: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig <a name="DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import data_google_vertex_ai_featurestore_entitytype_iam_policy

dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entitytype: str,
  featurestore: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.entitytype">entitytype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#entitytype DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#entitytype}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.featurestore">featurestore</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#featurestore DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#featurestore}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#id DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.entitytype"></a>

```python
entitytype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#entitytype DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#entitytype}.

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.featurestore"></a>

```python
featurestore: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#featurestore DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#featurestore}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeaturestoreEntitytypeIamPolicy.DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#id DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



