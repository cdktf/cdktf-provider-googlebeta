# `google_firebase_hosting_version`

Refer to the Terraform Registory for docs: [`google_firebase_hosting_version`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version).

# `googleFirebaseHostingVersion` Submodule <a name="`googleFirebaseHostingVersion` Submodule" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingVersion <a name="GoogleFirebaseHostingVersion" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version google_firebase_hosting_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  site_id: str,
  config: GoogleFirebaseHostingVersionConfigA = None,
  id: str = None,
  timeouts: GoogleFirebaseHostingVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | Required. The ID of the site in which to create this Version. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.siteId"></a>

- *Type:* str

Required. The ID of the site in which to create this Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#site_id GoogleFirebaseHostingVersion#site_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#config GoogleFirebaseHostingVersion#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#timeouts GoogleFirebaseHostingVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig"></a>

```python
def put_config(
  redirects: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRedirects]] = None,
  rewrites: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRewrites]] = None
) -> None
```

###### `redirects`<sup>Optional</sup> <a name="redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig.parameter.redirects"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>]]

redirects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#redirects GoogleFirebaseHostingVersion#redirects}

---

###### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig.parameter.rewrites"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>]]

rewrites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#rewrites GoogleFirebaseHostingVersion#rewrites}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference">GoogleFirebaseHostingVersionConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference">GoogleFirebaseHostingVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.config"></a>

```python
config: GoogleFirebaseHostingVersionConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference">GoogleFirebaseHostingVersionConfigAOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeouts"></a>

```python
timeouts: GoogleFirebaseHostingVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference">GoogleFirebaseHostingVersionTimeoutsOutputReference</a>

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.configInput"></a>

```python
config_input: GoogleFirebaseHostingVersionConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleFirebaseHostingVersionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingVersionConfig <a name="GoogleFirebaseHostingVersionConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  site_id: str,
  config: GoogleFirebaseHostingVersionConfigA = None,
  id: str = None,
  timeouts: GoogleFirebaseHostingVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.siteId">site_id</a></code> | <code>str</code> | Required. The ID of the site in which to create this Version. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

Required. The ID of the site in which to create this Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#site_id GoogleFirebaseHostingVersion#site_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.config"></a>

```python
config: GoogleFirebaseHostingVersionConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#config GoogleFirebaseHostingVersion#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseHostingVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#timeouts GoogleFirebaseHostingVersion#timeouts}

---

### GoogleFirebaseHostingVersionConfigA <a name="GoogleFirebaseHostingVersionConfigA" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA(
  redirects: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRedirects]] = None,
  rewrites: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRewrites]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.redirects">redirects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>]]</code> | redirects block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.rewrites">rewrites</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>]]</code> | rewrites block. |

---

##### `redirects`<sup>Optional</sup> <a name="redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.redirects"></a>

```python
redirects: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRedirects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>]]

redirects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#redirects GoogleFirebaseHostingVersion#redirects}

---

##### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.rewrites"></a>

```python
rewrites: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRewrites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>]]

rewrites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#rewrites GoogleFirebaseHostingVersion#rewrites}

---

### GoogleFirebaseHostingVersionConfigRedirects <a name="GoogleFirebaseHostingVersionConfigRedirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects(
  location: str,
  status_code: typing.Union[int, float],
  glob: str = None,
  regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.location">location</a></code> | <code>str</code> | The value to put in the HTTP location header of the response. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | The status HTTP code to return in the response. It must be a valid 3xx status code. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.glob">glob</a></code> | <code>str</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.regex">regex</a></code> | <code>str</code> | The user-supplied RE2 regular expression to match against the request URL path. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.location"></a>

```python
location: str
```

- *Type:* str

The value to put in the HTTP location header of the response.

The location can contain capture group values from the pattern using a : prefix to identify
the segment and an optional * to capture the rest of the URL. For example:

```hcl
redirects {
glob = "/:capture*"
status_code = 302
location = "https://example.com/foo/:capture"
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#location GoogleFirebaseHostingVersion#location}

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The status HTTP code to return in the response. It must be a valid 3xx status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#status_code GoogleFirebaseHostingVersion#status_code}

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.glob"></a>

```python
glob: str
```

- *Type:* str

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.regex"></a>

```python
regex: str
```

- *Type:* str

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

### GoogleFirebaseHostingVersionConfigRewrites <a name="GoogleFirebaseHostingVersionConfigRewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites(
  function: str = None,
  glob: str = None,
  regex: str = None,
  run: GoogleFirebaseHostingVersionConfigRewritesRun = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.function">function</a></code> | <code>str</code> | The function to proxy requests to. Must match the exported function name exactly. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.glob">glob</a></code> | <code>str</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.regex">regex</a></code> | <code>str</code> | The user-supplied RE2 regular expression to match against the request URL path. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.run">run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | run block. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.function"></a>

```python
function: str
```

- *Type:* str

The function to proxy requests to. Must match the exported function name exactly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#function GoogleFirebaseHostingVersion#function}

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.glob"></a>

```python
glob: str
```

- *Type:* str

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.regex"></a>

```python
regex: str
```

- *Type:* str

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.run"></a>

```python
run: GoogleFirebaseHostingVersionConfigRewritesRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#run GoogleFirebaseHostingVersion#run}

---

### GoogleFirebaseHostingVersionConfigRewritesRun <a name="GoogleFirebaseHostingVersionConfigRewritesRun" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun(
  service_id: str,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.serviceId">service_id</a></code> | <code>str</code> | User-defined ID of the Cloud Run service. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.region">region</a></code> | <code>str</code> | Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied. |

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

User-defined ID of the Cloud Run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#service_id GoogleFirebaseHostingVersion#service_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.region"></a>

```python
region: str
```

- *Type:* str

Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#region GoogleFirebaseHostingVersion#region}

---

### GoogleFirebaseHostingVersionTimeouts <a name="GoogleFirebaseHostingVersionTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingVersionConfigAOutputReference <a name="GoogleFirebaseHostingVersionConfigAOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects">put_redirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites">put_rewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRedirects">reset_redirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRewrites">reset_rewrites</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_redirects` <a name="put_redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects"></a>

```python
def put_redirects(
  value: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRedirects]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>]]

---

##### `put_rewrites` <a name="put_rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites"></a>

```python
def put_rewrites(
  value: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRewrites]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>]]

---

##### `reset_redirects` <a name="reset_redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRedirects"></a>

```python
def reset_redirects() -> None
```

##### `reset_rewrites` <a name="reset_rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRewrites"></a>

```python
def reset_rewrites() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirects">redirects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList">GoogleFirebaseHostingVersionConfigRedirectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList">GoogleFirebaseHostingVersionConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirectsInput">redirects_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewritesInput">rewrites_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirects`<sup>Required</sup> <a name="redirects" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirects"></a>

```python
redirects: GoogleFirebaseHostingVersionConfigRedirectsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList">GoogleFirebaseHostingVersionConfigRedirectsList</a>

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewrites"></a>

```python
rewrites: GoogleFirebaseHostingVersionConfigRewritesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList">GoogleFirebaseHostingVersionConfigRewritesList</a>

---

##### `redirects_input`<sup>Optional</sup> <a name="redirects_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirectsInput"></a>

```python
redirects_input: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRedirects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>]]

---

##### `rewrites_input`<sup>Optional</sup> <a name="rewrites_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewritesInput"></a>

```python
rewrites_input: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRewrites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingVersionConfigA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---


### GoogleFirebaseHostingVersionConfigRedirectsList <a name="GoogleFirebaseHostingVersionConfigRedirectsList" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingVersionConfigRedirectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRedirects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>]]

---


### GoogleFirebaseHostingVersionConfigRedirectsOutputReference <a name="GoogleFirebaseHostingVersionConfigRedirectsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetGlob">reset_glob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_glob` <a name="reset_glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetGlob"></a>

```python
def reset_glob() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.globInput">glob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.glob">glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glob_input`<sup>Optional</sup> <a name="glob_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.globInput"></a>

```python
glob_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `glob`<sup>Required</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.glob"></a>

```python
glob: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleFirebaseHostingVersionConfigRedirects, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>, cdktf.IResolvable]

---


### GoogleFirebaseHostingVersionConfigRewritesList <a name="GoogleFirebaseHostingVersionConfigRewritesList" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingVersionConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleFirebaseHostingVersionConfigRewrites]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>]]

---


### GoogleFirebaseHostingVersionConfigRewritesOutputReference <a name="GoogleFirebaseHostingVersionConfigRewritesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun">put_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetFunction">reset_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetGlob">reset_glob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRun">reset_run</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_run` <a name="put_run" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun"></a>

```python
def put_run(
  service_id: str,
  region: str = None
) -> None
```

###### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun.parameter.serviceId"></a>

- *Type:* str

User-defined ID of the Cloud Run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#service_id GoogleFirebaseHostingVersion#service_id}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun.parameter.region"></a>

- *Type:* str

Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_firebase_hosting_version#region GoogleFirebaseHostingVersion#region}

---

##### `reset_function` <a name="reset_function" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetFunction"></a>

```python
def reset_function() -> None
```

##### `reset_glob` <a name="reset_glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetGlob"></a>

```python
def reset_glob() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_run` <a name="reset_run" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRun"></a>

```python
def reset_run() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.run">run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference">GoogleFirebaseHostingVersionConfigRewritesRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.functionInput">function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.globInput">glob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.runInput">run_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.function">function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.glob">glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.run"></a>

```python
run: GoogleFirebaseHostingVersionConfigRewritesRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference">GoogleFirebaseHostingVersionConfigRewritesRunOutputReference</a>

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.functionInput"></a>

```python
function_input: str
```

- *Type:* str

---

##### `glob_input`<sup>Optional</sup> <a name="glob_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.globInput"></a>

```python
glob_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `run_input`<sup>Optional</sup> <a name="run_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.runInput"></a>

```python
run_input: GoogleFirebaseHostingVersionConfigRewritesRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.function"></a>

```python
function: str
```

- *Type:* str

---

##### `glob`<sup>Required</sup> <a name="glob" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.glob"></a>

```python
glob: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleFirebaseHostingVersionConfigRewrites, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>, cdktf.IResolvable]

---


### GoogleFirebaseHostingVersionConfigRewritesRunOutputReference <a name="GoogleFirebaseHostingVersionConfigRewritesRunOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingVersionConfigRewritesRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---


### GoogleFirebaseHostingVersionTimeoutsOutputReference <a name="GoogleFirebaseHostingVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_version

googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleFirebaseHostingVersionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>, cdktf.IResolvable]

---



