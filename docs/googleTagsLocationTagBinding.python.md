# `google_tags_location_tag_binding`

Refer to the Terraform Registory for docs: [`google_tags_location_tag_binding`](https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding).

# `googleTagsLocationTagBinding` Submodule <a name="`googleTagsLocationTagBinding` Submodule" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTagsLocationTagBinding <a name="GoogleTagsLocationTagBinding" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding google_tags_location_tag_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tags_location_tag_binding

googleTagsLocationTagBinding.GoogleTagsLocationTagBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  tag_value: str,
  id: str = None,
  location: str = None,
  timeouts: GoogleTagsLocationTagBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.tagValue">tag_value</a></code> | <code>str</code> | The TagValue of the TagBinding. Must be of the form tagValues/456. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#id GoogleTagsLocationTagBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts">GoogleTagsLocationTagBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.parent"></a>

- *Type:* str

The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#parent GoogleTagsLocationTagBinding#parent}

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.tagValue"></a>

- *Type:* str

The TagValue of the TagBinding. Must be of the form tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#tag_value GoogleTagsLocationTagBinding#tag_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#id GoogleTagsLocationTagBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#location GoogleTagsLocationTagBinding#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts">GoogleTagsLocationTagBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#timeouts GoogleTagsLocationTagBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#create GoogleTagsLocationTagBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#delete GoogleTagsLocationTagBinding#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tags_location_tag_binding

googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tags_location_tag_binding

googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tags_location_tag_binding

googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference">GoogleTagsLocationTagBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts">GoogleTagsLocationTagBindingTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.timeouts"></a>

```python
timeouts: GoogleTagsLocationTagBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference">GoogleTagsLocationTagBindingTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleTagsLocationTagBindingTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts">GoogleTagsLocationTagBindingTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTagsLocationTagBindingConfig <a name="GoogleTagsLocationTagBindingConfig" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tags_location_tag_binding

googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  tag_value: str,
  id: str = None,
  location: str = None,
  timeouts: GoogleTagsLocationTagBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.parent">parent</a></code> | <code>str</code> | The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.tagValue">tag_value</a></code> | <code>str</code> | The TagValue of the TagBinding. Must be of the form tagValues/456. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#id GoogleTagsLocationTagBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts">GoogleTagsLocationTagBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#parent GoogleTagsLocationTagBinding#parent}

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

The TagValue of the TagBinding. Must be of the form tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#tag_value GoogleTagsLocationTagBinding#tag_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#id GoogleTagsLocationTagBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#location GoogleTagsLocationTagBinding#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingConfig.property.timeouts"></a>

```python
timeouts: GoogleTagsLocationTagBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts">GoogleTagsLocationTagBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#timeouts GoogleTagsLocationTagBinding#timeouts}

---

### GoogleTagsLocationTagBindingTimeouts <a name="GoogleTagsLocationTagBindingTimeouts" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tags_location_tag_binding

googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#create GoogleTagsLocationTagBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#delete GoogleTagsLocationTagBinding#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#create GoogleTagsLocationTagBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.63.0/docs/resources/google_tags_location_tag_binding#delete GoogleTagsLocationTagBinding#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTagsLocationTagBindingTimeoutsOutputReference <a name="GoogleTagsLocationTagBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_tags_location_tag_binding

googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts">GoogleTagsLocationTagBindingTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleTagsLocationTagBindingTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleTagsLocationTagBinding.GoogleTagsLocationTagBindingTimeouts">GoogleTagsLocationTagBindingTimeouts</a>, cdktf.IResolvable]

---



