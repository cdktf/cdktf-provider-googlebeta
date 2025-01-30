# `googleOrganizationAccessApprovalSettings` Submodule <a name="`googleOrganizationAccessApprovalSettings` Submodule" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationAccessApprovalSettings <a name="GoogleOrganizationAccessApprovalSettings" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings google_organization_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enrolled_services: typing.Union[IResolvable, typing.List[GoogleOrganizationAccessApprovalSettingsEnrolledServices]],
  organization_id: str,
  active_key_version: str = None,
  id: str = None,
  notification_emails: typing.List[str] = None,
  timeouts: GoogleOrganizationAccessApprovalSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.enrolledServices">enrolled_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.activeKeyVersion">active_key_version</a></code> | <code>str</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.enrolledServices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#enrolled_services GoogleOrganizationAccessApprovalSettings#enrolled_services}

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.organizationId"></a>

- *Type:* str

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#organization_id GoogleOrganizationAccessApprovalSettings#organization_id}

---

##### `active_key_version`<sup>Optional</sup> <a name="active_key_version" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.activeKeyVersion"></a>

- *Type:* str

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#active_key_version GoogleOrganizationAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_emails`<sup>Optional</sup> <a name="notification_emails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.notificationEmails"></a>

- *Type:* typing.List[str]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#notification_emails GoogleOrganizationAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#timeouts GoogleOrganizationAccessApprovalSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices">put_enrolled_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetActiveKeyVersion">reset_active_key_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetNotificationEmails">reset_notification_emails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_enrolled_services` <a name="put_enrolled_services" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices"></a>

```python
def put_enrolled_services(
  value: typing.Union[IResolvable, typing.List[GoogleOrganizationAccessApprovalSettingsEnrolledServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}.

---

##### `reset_active_key_version` <a name="reset_active_key_version" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetActiveKeyVersion"></a>

```python
def reset_active_key_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_emails` <a name="reset_notification_emails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetNotificationEmails"></a>

```python
def reset_notification_emails() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleOrganizationAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleOrganizationAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOrganizationAccessApprovalSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOrganizationAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion">ancestor_has_active_key_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledAncestor">enrolled_ancestor</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServices">enrolled_services</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList">GoogleOrganizationAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.invalidKeyVersion">invalid_key_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference">GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersionInput">active_key_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServicesInput">enrolled_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmailsInput">notification_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersion">active_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ancestor_has_active_key_version`<sup>Required</sup> <a name="ancestor_has_active_key_version" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```python
ancestor_has_active_key_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enrolled_ancestor`<sup>Required</sup> <a name="enrolled_ancestor" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledAncestor"></a>

```python
enrolled_ancestor: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServices"></a>

```python
enrolled_services: GoogleOrganizationAccessApprovalSettingsEnrolledServicesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList">GoogleOrganizationAccessApprovalSettingsEnrolledServicesList</a>

---

##### `invalid_key_version`<sup>Required</sup> <a name="invalid_key_version" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.invalidKeyVersion"></a>

```python
invalid_key_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeouts"></a>

```python
timeouts: GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference">GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `active_key_version_input`<sup>Optional</sup> <a name="active_key_version_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersionInput"></a>

```python
active_key_version_input: str
```

- *Type:* str

---

##### `enrolled_services_input`<sup>Optional</sup> <a name="enrolled_services_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.enrolledServicesInput"></a>

```python
enrolled_services_input: typing.Union[IResolvable, typing.List[GoogleOrganizationAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_emails_input`<sup>Optional</sup> <a name="notification_emails_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmailsInput"></a>

```python
notification_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleOrganizationAccessApprovalSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>]

---

##### `active_key_version`<sup>Required</sup> <a name="active_key_version" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.activeKeyVersion"></a>

```python
active_key_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_emails`<sup>Required</sup> <a name="notification_emails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.notificationEmails"></a>

```python
notification_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationAccessApprovalSettingsConfig <a name="GoogleOrganizationAccessApprovalSettingsConfig" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enrolled_services: typing.Union[IResolvable, typing.List[GoogleOrganizationAccessApprovalSettingsEnrolledServices]],
  organization_id: str,
  active_key_version: str = None,
  id: str = None,
  notification_emails: typing.List[str] = None,
  timeouts: GoogleOrganizationAccessApprovalSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.enrolledServices">enrolled_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.organizationId">organization_id</a></code> | <code>str</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.activeKeyVersion">active_key_version</a></code> | <code>str</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.notificationEmails">notification_emails</a></code> | <code>typing.List[str]</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enrolled_services`<sup>Required</sup> <a name="enrolled_services" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.enrolledServices"></a>

```python
enrolled_services: typing.Union[IResolvable, typing.List[GoogleOrganizationAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#enrolled_services GoogleOrganizationAccessApprovalSettings#enrolled_services}

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#organization_id GoogleOrganizationAccessApprovalSettings#organization_id}

---

##### `active_key_version`<sup>Optional</sup> <a name="active_key_version" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```python
active_key_version: str
```

- *Type:* str

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#active_key_version GoogleOrganizationAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#id GoogleOrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_emails`<sup>Optional</sup> <a name="notification_emails" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.notificationEmails"></a>

```python
notification_emails: typing.List[str]
```

- *Type:* typing.List[str]

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#notification_emails GoogleOrganizationAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsConfig.property.timeouts"></a>

```python
timeouts: GoogleOrganizationAccessApprovalSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#timeouts GoogleOrganizationAccessApprovalSettings#timeouts}

---

### GoogleOrganizationAccessApprovalSettingsEnrolledServices <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices(
  cloud_product: str,
  enrollment_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct">cloud_product</a></code> | <code>str</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">enrollment_level</a></code> | <code>str</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `cloud_product`<sup>Required</sup> <a name="cloud_product" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```python
cloud_product: str
```

- *Type:* str

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
all
appengine.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
cloudkms.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
iam.googleapis.com
pubsub.googleapis.com
storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#cloud_product GoogleOrganizationAccessApprovalSettings#cloud_product}

---

##### `enrollment_level`<sup>Optional</sup> <a name="enrollment_level" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```python
enrollment_level: str
```

- *Type:* str

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#enrollment_level GoogleOrganizationAccessApprovalSettings#enrollment_level}

---

### GoogleOrganizationAccessApprovalSettingsTimeouts <a name="GoogleOrganizationAccessApprovalSettingsTimeouts" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#create GoogleOrganizationAccessApprovalSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#delete GoogleOrganizationAccessApprovalSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_organization_access_approval_settings#update GoogleOrganizationAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationAccessApprovalSettingsEnrolledServicesList <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleOrganizationAccessApprovalSettingsEnrolledServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]]

---


### GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference <a name="GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">reset_enrollment_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enrollment_level` <a name="reset_enrollment_level" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```python
def reset_enrollment_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">cloud_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">enrollment_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">cloud_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">enrollment_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_product_input`<sup>Optional</sup> <a name="cloud_product_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```python
cloud_product_input: str
```

- *Type:* str

---

##### `enrollment_level_input`<sup>Optional</sup> <a name="enrollment_level_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```python
enrollment_level_input: str
```

- *Type:* str

---

##### `cloud_product`<sup>Required</sup> <a name="cloud_product" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```python
cloud_product: str
```

- *Type:* str

---

##### `enrollment_level`<sup>Required</sup> <a name="enrollment_level" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```python
enrollment_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOrganizationAccessApprovalSettingsEnrolledServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsEnrolledServices">GoogleOrganizationAccessApprovalSettingsEnrolledServices</a>]

---


### GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference <a name="GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_access_approval_settings

googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOrganizationAccessApprovalSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOrganizationAccessApprovalSettings.GoogleOrganizationAccessApprovalSettingsTimeouts">GoogleOrganizationAccessApprovalSettingsTimeouts</a>]

---



