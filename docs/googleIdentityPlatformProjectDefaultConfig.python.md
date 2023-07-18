# `google_identity_platform_project_default_config`

Refer to the Terraform Registory for docs: [`google_identity_platform_project_default_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config).

# `googleIdentityPlatformProjectDefaultConfig` Submodule <a name="`googleIdentityPlatformProjectDefaultConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformProjectDefaultConfig <a name="GoogleIdentityPlatformProjectDefaultConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config google_identity_platform_project_default_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  sign_in: GoogleIdentityPlatformProjectDefaultConfigSignIn = None,
  timeouts: GoogleIdentityPlatformProjectDefaultConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}.

---

##### `sign_in`<sup>Optional</sup> <a name="sign_in" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.signIn"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#sign_in GoogleIdentityPlatformProjectDefaultConfig#sign_in}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#timeouts GoogleIdentityPlatformProjectDefaultConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn">put_sign_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetSignIn">reset_sign_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_sign_in` <a name="put_sign_in" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn"></a>

```python
def put_sign_in(
  allow_duplicate_emails: typing.Union[bool, IResolvable] = None,
  anonymous: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous = None,
  email: GoogleIdentityPlatformProjectDefaultConfigSignInEmail = None,
  phone_number: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber = None
) -> None
```

###### `allow_duplicate_emails`<sup>Optional</sup> <a name="allow_duplicate_emails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn.parameter.allowDuplicateEmails"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#allow_duplicate_emails GoogleIdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

###### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn.parameter.anonymous"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#anonymous GoogleIdentityPlatformProjectDefaultConfig#anonymous}

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn.parameter.email"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#email GoogleIdentityPlatformProjectDefaultConfig#email}

---

###### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putSignIn.parameter.phoneNumber"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#phone_number GoogleIdentityPlatformProjectDefaultConfig#phone_number}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#create GoogleIdentityPlatformProjectDefaultConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#delete GoogleIdentityPlatformProjectDefaultConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#update GoogleIdentityPlatformProjectDefaultConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_sign_in` <a name="reset_sign_in" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetSignIn"></a>

```python
def reset_sign_in() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference">GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signInInput">sign_in_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_in`<sup>Required</sup> <a name="sign_in" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signIn"></a>

```python
sign_in: GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference">GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sign_in_input`<sup>Optional</sup> <a name="sign_in_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.signInInput"></a>

```python
sign_in_input: GoogleIdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIdentityPlatformProjectDefaultConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformProjectDefaultConfigConfig <a name="GoogleIdentityPlatformProjectDefaultConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  sign_in: GoogleIdentityPlatformProjectDefaultConfigSignIn = None,
  timeouts: GoogleIdentityPlatformProjectDefaultConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.signIn">sign_in</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}.

---

##### `sign_in`<sup>Optional</sup> <a name="sign_in" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.signIn"></a>

```python
sign_in: GoogleIdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#sign_in GoogleIdentityPlatformProjectDefaultConfig#sign_in}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformProjectDefaultConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#timeouts GoogleIdentityPlatformProjectDefaultConfig#timeouts}

---

### GoogleIdentityPlatformProjectDefaultConfigSignIn <a name="GoogleIdentityPlatformProjectDefaultConfigSignIn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn(
  allow_duplicate_emails: typing.Union[bool, IResolvable] = None,
  anonymous: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous = None,
  email: GoogleIdentityPlatformProjectDefaultConfigSignInEmail = None,
  phone_number: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails">allow_duplicate_emails</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.email">email</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber">phone_number</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `allow_duplicate_emails`<sup>Optional</sup> <a name="allow_duplicate_emails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails"></a>

```python
allow_duplicate_emails: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#allow_duplicate_emails GoogleIdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

##### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.anonymous"></a>

```python
anonymous: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#anonymous GoogleIdentityPlatformProjectDefaultConfig#anonymous}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.email"></a>

```python
email: GoogleIdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#email GoogleIdentityPlatformProjectDefaultConfig#email}

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber"></a>

```python
phone_number: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#phone_number GoogleIdentityPlatformProjectDefaultConfig#phone_number}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous <a name="GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInEmail <a name="GoogleIdentityPlatformProjectDefaultConfigSignInEmail" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail(
  enabled: typing.Union[bool, IResolvable] = None,
  password_required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired">password_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether a password is required for email auth or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

##### `password_required`<sup>Optional</sup> <a name="password_required" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired"></a>

```python
password_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#password_required GoogleIdentityPlatformProjectDefaultConfig#password_required}

---

### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig()
```


### GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber <a name="GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber(
  enabled: typing.Union[bool, IResolvable] = None,
  test_phone_numbers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers">test_phone_numbers</a></code> | <code>typing.Mapping[str]</code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

##### `test_phone_numbers`<sup>Optional</sup> <a name="test_phone_numbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```python
test_phone_numbers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#test_phone_numbers GoogleIdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

### GoogleIdentityPlatformProjectDefaultConfigTimeouts <a name="GoogleIdentityPlatformProjectDefaultConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#create GoogleIdentityPlatformProjectDefaultConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#delete GoogleIdentityPlatformProjectDefaultConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#update GoogleIdentityPlatformProjectDefaultConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#create GoogleIdentityPlatformProjectDefaultConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#delete GoogleIdentityPlatformProjectDefaultConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#update GoogleIdentityPlatformProjectDefaultConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired">reset_password_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_password_required` <a name="reset_password_required" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```python
def reset_password_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput">password_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired">password_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_required_input`<sup>Optional</sup> <a name="password_required_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```python
password_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_required`<sup>Required</sup> <a name="password_required" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired"></a>

```python
password_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost">memory_cost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds">rounds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator">salt_separator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey">signer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `memory_cost`<sup>Required</sup> <a name="memory_cost" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```python
memory_cost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rounds`<sup>Required</sup> <a name="rounds" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds"></a>

```python
rounds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `salt_separator`<sup>Required</sup> <a name="salt_separator" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```python
salt_separator: str
```

- *Type:* str

---

##### `signer_key`<sup>Required</sup> <a name="signer_key" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey"></a>

```python
signer_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous">put_anonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail">put_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber">put_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails">reset_allow_duplicate_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous">reset_anonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_anonymous` <a name="put_anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous"></a>

```python
def put_anonymous(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

##### `put_email` <a name="put_email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail"></a>

```python
def put_email(
  enabled: typing.Union[bool, IResolvable] = None,
  password_required: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

###### `password_required`<sup>Optional</sup> <a name="password_required" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.passwordRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#password_required GoogleIdentityPlatformProjectDefaultConfig#password_required}

---

##### `put_phone_number` <a name="put_phone_number" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber"></a>

```python
def put_phone_number(
  enabled: typing.Union[bool, IResolvable] = None,
  test_phone_numbers: typing.Mapping[str] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}

---

###### `test_phone_numbers`<sup>Optional</sup> <a name="test_phone_numbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.testPhoneNumbers"></a>

- *Type:* typing.Mapping[str]

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.2/docs/resources/google_identity_platform_project_default_config#test_phone_numbers GoogleIdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

##### `reset_allow_duplicate_emails` <a name="reset_allow_duplicate_emails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```python
def reset_allow_duplicate_emails() -> None
```

##### `reset_anonymous` <a name="reset_anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous"></a>

```python
def reset_anonymous() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig">hash_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber">phone_number</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput">allow_duplicate_emails_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput">anonymous_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput">email_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails">allow_duplicate_emails</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anonymous`<sup>Required</sup> <a name="anonymous" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous"></a>

```python
anonymous: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.email"></a>

```python
email: GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a>

---

##### `hash_config`<sup>Required</sup> <a name="hash_config" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig"></a>

```python
hash_config: GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList">GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList</a>

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber"></a>

```python
phone_number: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a>

---

##### `allow_duplicate_emails_input`<sup>Optional</sup> <a name="allow_duplicate_emails_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```python
allow_duplicate_emails_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `anonymous_input`<sup>Optional</sup> <a name="anonymous_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput"></a>

```python
anonymous_input: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous">GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput"></a>

```python
email_input: GoogleIdentityPlatformProjectDefaultConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInEmail">GoogleIdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `allow_duplicate_emails`<sup>Required</sup> <a name="allow_duplicate_emails" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```python
allow_duplicate_emails: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformProjectDefaultConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignIn">GoogleIdentityPlatformProjectDefaultConfigSignIn</a>

---


### GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">reset_test_phone_numbers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_test_phone_numbers` <a name="reset_test_phone_numbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```python
def reset_test_phone_numbers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">test_phone_numbers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">test_phone_numbers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `test_phone_numbers_input`<sup>Optional</sup> <a name="test_phone_numbers_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```python
test_phone_numbers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `test_phone_numbers`<sup>Required</sup> <a name="test_phone_numbers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```python
test_phone_numbers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```python
internal_value: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber">GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---


### GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_project_default_config

googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIdentityPlatformProjectDefaultConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformProjectDefaultConfig.GoogleIdentityPlatformProjectDefaultConfigTimeouts">GoogleIdentityPlatformProjectDefaultConfigTimeouts</a>]

---



