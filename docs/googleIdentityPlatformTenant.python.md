# `google_identity_platform_tenant`

Refer to the Terraform Registory for docs: [`google_identity_platform_tenant`](https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant).

# `googleIdentityPlatformTenant` Submodule <a name="`googleIdentityPlatformTenant` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenant <a name="GoogleIdentityPlatformTenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant google_identity_platform_tenant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant

googleIdentityPlatformTenant.GoogleIdentityPlatformTenant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  allow_password_signup: typing.Union[bool, IResolvable] = None,
  disable_auth: typing.Union[bool, IResolvable] = None,
  enable_email_link_signin: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformTenantTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.allowPasswordSignup">allow_password_signup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.disableAuth">disable_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.enableEmailLinkSignin">enable_email_link_signin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.displayName"></a>

- *Type:* str

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#display_name GoogleIdentityPlatformTenant#display_name}

---

##### `allow_password_signup`<sup>Optional</sup> <a name="allow_password_signup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.allowPasswordSignup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#allow_password_signup GoogleIdentityPlatformTenant#allow_password_signup}

---

##### `disable_auth`<sup>Optional</sup> <a name="disable_auth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.disableAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#disable_auth GoogleIdentityPlatformTenant#disable_auth}

---

##### `enable_email_link_signin`<sup>Optional</sup> <a name="enable_email_link_signin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.enableEmailLinkSignin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#enable_email_link_signin GoogleIdentityPlatformTenant#enable_email_link_signin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#timeouts GoogleIdentityPlatformTenant#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetAllowPasswordSignup">reset_allow_password_signup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDisableAuth">reset_disable_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetEnableEmailLinkSignin">reset_enable_email_link_signin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}.

---

##### `reset_allow_password_signup` <a name="reset_allow_password_signup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetAllowPasswordSignup"></a>

```python
def reset_allow_password_signup() -> None
```

##### `reset_disable_auth` <a name="reset_disable_auth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetDisableAuth"></a>

```python
def reset_disable_auth() -> None
```

##### `reset_enable_email_link_signin` <a name="reset_enable_email_link_signin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetEnableEmailLinkSignin"></a>

```python
def reset_enable_email_link_signin() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant

googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant

googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant

googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference">GoogleIdentityPlatformTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignupInput">allow_password_signup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuthInput">disable_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSigninInput">enable_email_link_signin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignup">allow_password_signup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuth">disable_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSignin">enable_email_link_signin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformTenantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference">GoogleIdentityPlatformTenantTimeoutsOutputReference</a>

---

##### `allow_password_signup_input`<sup>Optional</sup> <a name="allow_password_signup_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignupInput"></a>

```python
allow_password_signup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_auth_input`<sup>Optional</sup> <a name="disable_auth_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuthInput"></a>

```python
disable_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_email_link_signin_input`<sup>Optional</sup> <a name="enable_email_link_signin_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSigninInput"></a>

```python
enable_email_link_signin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleIdentityPlatformTenantTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>]

---

##### `allow_password_signup`<sup>Required</sup> <a name="allow_password_signup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.allowPasswordSignup"></a>

```python
allow_password_signup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_auth`<sup>Required</sup> <a name="disable_auth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.disableAuth"></a>

```python
disable_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_email_link_signin`<sup>Required</sup> <a name="enable_email_link_signin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.enableEmailLinkSignin"></a>

```python
enable_email_link_signin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantConfig <a name="GoogleIdentityPlatformTenantConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant

googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  allow_password_signup: typing.Union[bool, IResolvable] = None,
  disable_auth: typing.Union[bool, IResolvable] = None,
  enable_email_link_signin: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleIdentityPlatformTenantTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.displayName">display_name</a></code> | <code>str</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.allowPasswordSignup">allow_password_signup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.disableAuth">disable_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.enableEmailLinkSignin">enable_email_link_signin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#display_name GoogleIdentityPlatformTenant#display_name}

---

##### `allow_password_signup`<sup>Optional</sup> <a name="allow_password_signup" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.allowPasswordSignup"></a>

```python
allow_password_signup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#allow_password_signup GoogleIdentityPlatformTenant#allow_password_signup}

---

##### `disable_auth`<sup>Optional</sup> <a name="disable_auth" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.disableAuth"></a>

```python
disable_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#disable_auth GoogleIdentityPlatformTenant#disable_auth}

---

##### `enable_email_link_signin`<sup>Optional</sup> <a name="enable_email_link_signin" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.enableEmailLinkSignin"></a>

```python
enable_email_link_signin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#enable_email_link_signin GoogleIdentityPlatformTenant#enable_email_link_signin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#id GoogleIdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#project GoogleIdentityPlatformTenant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantConfig.property.timeouts"></a>

```python
timeouts: GoogleIdentityPlatformTenantTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#timeouts GoogleIdentityPlatformTenant#timeouts}

---

### GoogleIdentityPlatformTenantTimeouts <a name="GoogleIdentityPlatformTenantTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant

googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#create GoogleIdentityPlatformTenant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#delete GoogleIdentityPlatformTenant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.71.0/docs/resources/google_identity_platform_tenant#update GoogleIdentityPlatformTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_identity_platform_tenant

googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleIdentityPlatformTenantTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenant.GoogleIdentityPlatformTenantTimeouts">GoogleIdentityPlatformTenantTimeouts</a>]

---



