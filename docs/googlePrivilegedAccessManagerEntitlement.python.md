# `googlePrivilegedAccessManagerEntitlement` Submodule <a name="`googlePrivilegedAccessManagerEntitlement` Submodule" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivilegedAccessManagerEntitlement <a name="GooglePrivilegedAccessManagerEntitlement" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement google_privileged_access_manager_entitlement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eligible_users: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementEligibleUsers]],
  entitlement_id: str,
  location: str,
  max_request_duration: str,
  parent: str,
  privileged_access: GooglePrivilegedAccessManagerEntitlementPrivilegedAccess,
  requester_justification_config: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig,
  additional_notification_targets: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets = None,
  approval_workflow: GooglePrivilegedAccessManagerEntitlementApprovalWorkflow = None,
  id: str = None,
  timeouts: GooglePrivilegedAccessManagerEntitlementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.eligibleUsers">eligible_users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]</code> | eligible_users block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.entitlementId">entitlement_id</a></code> | <code>str</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.location">location</a></code> | <code>str</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.maxRequestDuration">max_request_duration</a></code> | <code>str</code> | The maximum amount of time for which access would be granted for a request. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.privilegedAccess">privileged_access</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | privileged_access block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.requesterJustificationConfig">requester_justification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | requester_justification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.additionalNotificationTargets">additional_notification_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | additional_notification_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.approvalWorkflow">approval_workflow</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | approval_workflow block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eligible_users`<sup>Required</sup> <a name="eligible_users" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.eligibleUsers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]

eligible_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#eligible_users GooglePrivilegedAccessManagerEntitlement#eligible_users}

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.entitlementId"></a>

- *Type:* str

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#entitlement_id GooglePrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.location"></a>

- *Type:* str

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#location GooglePrivilegedAccessManagerEntitlement#location}

---

##### `max_request_duration`<sup>Required</sup> <a name="max_request_duration" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.maxRequestDuration"></a>

- *Type:* str

The maximum amount of time for which access would be granted for a request.

A requester can choose to ask for access for less than this duration but never more.
Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#max_request_duration GooglePrivilegedAccessManagerEntitlement#max_request_duration}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.parent"></a>

- *Type:* str

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#parent GooglePrivilegedAccessManagerEntitlement#parent}

---

##### `privileged_access`<sup>Required</sup> <a name="privileged_access" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.privilegedAccess"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

privileged_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#privileged_access GooglePrivilegedAccessManagerEntitlement#privileged_access}

---

##### `requester_justification_config`<sup>Required</sup> <a name="requester_justification_config" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.requesterJustificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

requester_justification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#requester_justification_config GooglePrivilegedAccessManagerEntitlement#requester_justification_config}

---

##### `additional_notification_targets`<sup>Optional</sup> <a name="additional_notification_targets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.additionalNotificationTargets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

additional_notification_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#additional_notification_targets GooglePrivilegedAccessManagerEntitlement#additional_notification_targets}

---

##### `approval_workflow`<sup>Optional</sup> <a name="approval_workflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.approvalWorkflow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

approval_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approval_workflow GooglePrivilegedAccessManagerEntitlement#approval_workflow}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#timeouts GooglePrivilegedAccessManagerEntitlement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets">put_additional_notification_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow">put_approval_workflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers">put_eligible_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess">put_privileged_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig">put_requester_justification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets">reset_additional_notification_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetApprovalWorkflow">reset_approval_workflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_notification_targets` <a name="put_additional_notification_targets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets"></a>

```python
def put_additional_notification_targets(
  admin_email_recipients: typing.List[str] = None,
  requester_email_recipients: typing.List[str] = None
) -> None
```

###### `admin_email_recipients`<sup>Optional</sup> <a name="admin_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets.parameter.adminEmailRecipients"></a>

- *Type:* typing.List[str]

Optional. Additional email addresses to be notified when a principal(requester) is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#admin_email_recipients GooglePrivilegedAccessManagerEntitlement#admin_email_recipients}

---

###### `requester_email_recipients`<sup>Optional</sup> <a name="requester_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets.parameter.requesterEmailRecipients"></a>

- *Type:* typing.List[str]

Optional. Additional email address to be notified about an eligible entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#requester_email_recipients GooglePrivilegedAccessManagerEntitlement#requester_email_recipients}

---

##### `put_approval_workflow` <a name="put_approval_workflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow"></a>

```python
def put_approval_workflow(
  manual_approvals: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
) -> None
```

###### `manual_approvals`<sup>Required</sup> <a name="manual_approvals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow.parameter.manualApprovals"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

manual_approvals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#manual_approvals GooglePrivilegedAccessManagerEntitlement#manual_approvals}

---

##### `put_eligible_users` <a name="put_eligible_users" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers"></a>

```python
def put_eligible_users(
  value: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementEligibleUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]

---

##### `put_privileged_access` <a name="put_privileged_access" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess"></a>

```python
def put_privileged_access(
  gcp_iam_access: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
) -> None
```

###### `gcp_iam_access`<sup>Required</sup> <a name="gcp_iam_access" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess.parameter.gcpIamAccess"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

gcp_iam_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#gcp_iam_access GooglePrivilegedAccessManagerEntitlement#gcp_iam_access}

---

##### `put_requester_justification_config` <a name="put_requester_justification_config" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig"></a>

```python
def put_requester_justification_config(
  not_mandatory: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory = None,
  unstructured: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured = None
) -> None
```

###### `not_mandatory`<sup>Optional</sup> <a name="not_mandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig.parameter.notMandatory"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

not_mandatory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#not_mandatory GooglePrivilegedAccessManagerEntitlement#not_mandatory}

---

###### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig.parameter.unstructured"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

unstructured block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#unstructured GooglePrivilegedAccessManagerEntitlement#unstructured}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#create GooglePrivilegedAccessManagerEntitlement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#delete GooglePrivilegedAccessManagerEntitlement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#update GooglePrivilegedAccessManagerEntitlement#update}.

---

##### `reset_additional_notification_targets` <a name="reset_additional_notification_targets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets"></a>

```python
def reset_additional_notification_targets() -> None
```

##### `reset_approval_workflow` <a name="reset_approval_workflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetApprovalWorkflow"></a>

```python
def reset_approval_workflow() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GooglePrivilegedAccessManagerEntitlement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GooglePrivilegedAccessManagerEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivilegedAccessManagerEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets">additional_notification_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow">approval_workflow</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsers">eligible_users</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList">GooglePrivilegedAccessManagerEntitlementEligibleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccess">privileged_access</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig">requester_justification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference">GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput">additional_notification_targets_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflowInput">approval_workflow_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsersInput">eligible_users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput">entitlement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDurationInput">max_request_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccessInput">privileged_access_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput">requester_justification_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration">max_request_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_notification_targets`<sup>Required</sup> <a name="additional_notification_targets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets"></a>

```python
additional_notification_targets: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a>

---

##### `approval_workflow`<sup>Required</sup> <a name="approval_workflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow"></a>

```python
approval_workflow: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `eligible_users`<sup>Required</sup> <a name="eligible_users" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsers"></a>

```python
eligible_users: GooglePrivilegedAccessManagerEntitlementEligibleUsersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList">GooglePrivilegedAccessManagerEntitlementEligibleUsersList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `privileged_access`<sup>Required</sup> <a name="privileged_access" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccess"></a>

```python
privileged_access: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a>

---

##### `requester_justification_config`<sup>Required</sup> <a name="requester_justification_config" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig"></a>

```python
requester_justification_config: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeouts"></a>

```python
timeouts: GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference">GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `additional_notification_targets_input`<sup>Optional</sup> <a name="additional_notification_targets_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput"></a>

```python
additional_notification_targets_input: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `approval_workflow_input`<sup>Optional</sup> <a name="approval_workflow_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflowInput"></a>

```python
approval_workflow_input: GooglePrivilegedAccessManagerEntitlementApprovalWorkflow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `eligible_users_input`<sup>Optional</sup> <a name="eligible_users_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsersInput"></a>

```python
eligible_users_input: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementEligibleUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]

---

##### `entitlement_id_input`<sup>Optional</sup> <a name="entitlement_id_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput"></a>

```python
entitlement_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_request_duration_input`<sup>Optional</sup> <a name="max_request_duration_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDurationInput"></a>

```python
max_request_duration_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `privileged_access_input`<sup>Optional</sup> <a name="privileged_access_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccessInput"></a>

```python
privileged_access_input: GooglePrivilegedAccessManagerEntitlementPrivilegedAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `requester_justification_config_input`<sup>Optional</sup> <a name="requester_justification_config_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput"></a>

```python
requester_justification_config_input: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GooglePrivilegedAccessManagerEntitlementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>]

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_request_duration`<sup>Required</sup> <a name="max_request_duration" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration"></a>

```python
max_request_duration: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets <a name="GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets(
  admin_email_recipients: typing.List[str] = None,
  requester_email_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients">admin_email_recipients</a></code> | <code>typing.List[str]</code> | Optional. Additional email addresses to be notified when a principal(requester) is granted access. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients">requester_email_recipients</a></code> | <code>typing.List[str]</code> | Optional. Additional email address to be notified about an eligible entitlement. |

---

##### `admin_email_recipients`<sup>Optional</sup> <a name="admin_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients"></a>

```python
admin_email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Additional email addresses to be notified when a principal(requester) is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#admin_email_recipients GooglePrivilegedAccessManagerEntitlement#admin_email_recipients}

---

##### `requester_email_recipients`<sup>Optional</sup> <a name="requester_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients"></a>

```python
requester_email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Additional email address to be notified about an eligible entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#requester_email_recipients GooglePrivilegedAccessManagerEntitlement#requester_email_recipients}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflow <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow(
  manual_approvals: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals">manual_approvals</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | manual_approvals block. |

---

##### `manual_approvals`<sup>Required</sup> <a name="manual_approvals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals"></a>

```python
manual_approvals: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

manual_approvals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#manual_approvals GooglePrivilegedAccessManagerEntitlement#manual_approvals}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals(
  steps: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps]],
  require_approver_justification: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]]</code> | steps block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification">require_approver_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Do the approvers need to provide a justification for their actions? |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#steps GooglePrivilegedAccessManagerEntitlement#steps}

---

##### `require_approver_justification`<sup>Optional</sup> <a name="require_approver_justification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification"></a>

```python
require_approver_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Do the approvers need to provide a justification for their actions?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#require_approver_justification GooglePrivilegedAccessManagerEntitlement#require_approver_justification}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps(
  approvers: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers,
  approvals_needed: typing.Union[int, float] = None,
  approver_email_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers">approvers</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | approvers block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded">approvals_needed</a></code> | <code>typing.Union[int, float]</code> | How many users from the above list need to approve. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients">approver_email_recipients</a></code> | <code>typing.List[str]</code> | Optional. Additional email addresses to be notified when a grant is pending approval. |

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers"></a>

```python
approvers: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

approvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approvers GooglePrivilegedAccessManagerEntitlement#approvers}

---

##### `approvals_needed`<sup>Optional</sup> <a name="approvals_needed" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded"></a>

```python
approvals_needed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many users from the above list need to approve.

If there are not enough distinct users in the list above then the workflow
will indefinitely block. Should always be greater than 0. Currently 1 is the only
supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approvals_needed GooglePrivilegedAccessManagerEntitlement#approvals_needed}

---

##### `approver_email_recipients`<sup>Optional</sup> <a name="approver_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients"></a>

```python
approver_email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Additional email addresses to be notified when a grant is pending approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approver_email_recipients GooglePrivilegedAccessManagerEntitlement#approver_email_recipients}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers(
  principals: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals">principals</a></code> | <code>typing.List[str]</code> | Users who are being allowed for the operation. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}

---

### GooglePrivilegedAccessManagerEntitlementConfig <a name="GooglePrivilegedAccessManagerEntitlementConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eligible_users: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementEligibleUsers]],
  entitlement_id: str,
  location: str,
  max_request_duration: str,
  parent: str,
  privileged_access: GooglePrivilegedAccessManagerEntitlementPrivilegedAccess,
  requester_justification_config: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig,
  additional_notification_targets: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets = None,
  approval_workflow: GooglePrivilegedAccessManagerEntitlementApprovalWorkflow = None,
  id: str = None,
  timeouts: GooglePrivilegedAccessManagerEntitlementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.eligibleUsers">eligible_users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]</code> | eligible_users block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId">entitlement_id</a></code> | <code>str</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.location">location</a></code> | <code>str</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration">max_request_duration</a></code> | <code>str</code> | The maximum amount of time for which access would be granted for a request. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.parent">parent</a></code> | <code>str</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.privilegedAccess">privileged_access</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | privileged_access block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig">requester_justification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | requester_justification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets">additional_notification_targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | additional_notification_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow">approval_workflow</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | approval_workflow block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eligible_users`<sup>Required</sup> <a name="eligible_users" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.eligibleUsers"></a>

```python
eligible_users: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementEligibleUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]

eligible_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#eligible_users GooglePrivilegedAccessManagerEntitlement#eligible_users}

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#entitlement_id GooglePrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#location GooglePrivilegedAccessManagerEntitlement#location}

---

##### `max_request_duration`<sup>Required</sup> <a name="max_request_duration" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration"></a>

```python
max_request_duration: str
```

- *Type:* str

The maximum amount of time for which access would be granted for a request.

A requester can choose to ask for access for less than this duration but never more.
Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#max_request_duration GooglePrivilegedAccessManagerEntitlement#max_request_duration}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#parent GooglePrivilegedAccessManagerEntitlement#parent}

---

##### `privileged_access`<sup>Required</sup> <a name="privileged_access" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.privilegedAccess"></a>

```python
privileged_access: GooglePrivilegedAccessManagerEntitlementPrivilegedAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

privileged_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#privileged_access GooglePrivilegedAccessManagerEntitlement#privileged_access}

---

##### `requester_justification_config`<sup>Required</sup> <a name="requester_justification_config" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig"></a>

```python
requester_justification_config: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

requester_justification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#requester_justification_config GooglePrivilegedAccessManagerEntitlement#requester_justification_config}

---

##### `additional_notification_targets`<sup>Optional</sup> <a name="additional_notification_targets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets"></a>

```python
additional_notification_targets: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

additional_notification_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#additional_notification_targets GooglePrivilegedAccessManagerEntitlement#additional_notification_targets}

---

##### `approval_workflow`<sup>Optional</sup> <a name="approval_workflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow"></a>

```python
approval_workflow: GooglePrivilegedAccessManagerEntitlementApprovalWorkflow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

approval_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#approval_workflow GooglePrivilegedAccessManagerEntitlement#approval_workflow}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.timeouts"></a>

```python
timeouts: GooglePrivilegedAccessManagerEntitlementTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#timeouts GooglePrivilegedAccessManagerEntitlement#timeouts}

---

### GooglePrivilegedAccessManagerEntitlementEligibleUsers <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers(
  principals: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.property.principals">principals</a></code> | <code>typing.List[str]</code> | Users who are being allowed for the operation. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at "https://cloud.google.com/iam/docs/principal-identifiers#v1"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccess <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess(
  gcp_iam_access: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess">gcp_iam_access</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | gcp_iam_access block. |

---

##### `gcp_iam_access`<sup>Required</sup> <a name="gcp_iam_access" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess"></a>

```python
gcp_iam_access: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

gcp_iam_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#gcp_iam_access GooglePrivilegedAccessManagerEntitlement#gcp_iam_access}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess(
  resource: str,
  resource_type: str,
  role_bindings: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource">resource</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType">resource_type</a></code> | <code>str</code> | The type of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings">role_bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]]</code> | role_bindings block. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource"></a>

```python
resource: str
```

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#resource GooglePrivilegedAccessManagerEntitlement#resource}

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

The type of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#resource_type GooglePrivilegedAccessManagerEntitlement#resource_type}

---

##### `role_bindings`<sup>Required</sup> <a name="role_bindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings"></a>

```python
role_bindings: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]]

role_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#role_bindings GooglePrivilegedAccessManagerEntitlement#role_bindings}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings(
  role: str,
  condition_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role">role</a></code> | <code>str</code> | IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression">condition_expression</a></code> | <code>str</code> | The expression field of the IAM condition to be associated with the role. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role"></a>

```python
role: str
```

- *Type:* str

IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#role GooglePrivilegedAccessManagerEntitlement#role}

---

##### `condition_expression`<sup>Optional</sup> <a name="condition_expression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression"></a>

```python
condition_expression: str
```

- *Type:* str

The expression field of the IAM condition to be associated with the role.

If specified, a user with an active grant for this entitlement would be able to access the resource only if this condition evaluates to true for their request.
https://cloud.google.com/iam/docs/conditions-overview#attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#condition_expression GooglePrivilegedAccessManagerEntitlement#condition_expression}

---

### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig(
  not_mandatory: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory = None,
  unstructured: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory">not_mandatory</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | not_mandatory block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured">unstructured</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | unstructured block. |

---

##### `not_mandatory`<sup>Optional</sup> <a name="not_mandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory"></a>

```python
not_mandatory: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

not_mandatory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#not_mandatory GooglePrivilegedAccessManagerEntitlement#not_mandatory}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured"></a>

```python
unstructured: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

unstructured block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#unstructured GooglePrivilegedAccessManagerEntitlement#unstructured}

---

### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory()
```


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured()
```


### GooglePrivilegedAccessManagerEntitlementTimeouts <a name="GooglePrivilegedAccessManagerEntitlementTimeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#create GooglePrivilegedAccessManagerEntitlement#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#delete GooglePrivilegedAccessManagerEntitlement#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#update GooglePrivilegedAccessManagerEntitlement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#create GooglePrivilegedAccessManagerEntitlement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#delete GooglePrivilegedAccessManagerEntitlement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#update GooglePrivilegedAccessManagerEntitlement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients">reset_admin_email_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients">reset_requester_email_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_admin_email_recipients` <a name="reset_admin_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients"></a>

```python
def reset_admin_email_recipients() -> None
```

##### `reset_requester_email_recipients` <a name="reset_requester_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients"></a>

```python
def reset_requester_email_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput">admin_email_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput">requester_email_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients">admin_email_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients">requester_email_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_email_recipients_input`<sup>Optional</sup> <a name="admin_email_recipients_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput"></a>

```python
admin_email_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requester_email_recipients_input`<sup>Optional</sup> <a name="requester_email_recipients_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput"></a>

```python
requester_email_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admin_email_recipients`<sup>Required</sup> <a name="admin_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients"></a>

```python
admin_email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requester_email_recipients`<sup>Required</sup> <a name="requester_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients"></a>

```python
requester_email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification">reset_require_approver_justification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_steps` <a name="put_steps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]]

---

##### `reset_require_approver_justification` <a name="reset_require_approver_justification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification"></a>

```python
def reset_require_approver_justification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput">require_approver_justification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification">require_approver_justification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps"></a>

```python
steps: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a>

---

##### `require_approver_justification_input`<sup>Optional</sup> <a name="require_approver_justification_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput"></a>

```python
require_approver_justification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]]

---

##### `require_approver_justification`<sup>Required</sup> <a name="require_approver_justification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification"></a>

```python
require_approver_justification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]]

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers">put_approvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded">reset_approvals_needed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients">reset_approver_email_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_approvers` <a name="put_approvers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers"></a>

```python
def put_approvers(
  principals: typing.List[str]
) -> None
```

###### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers.parameter.principals"></a>

- *Type:* typing.List[str]

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}

---

##### `reset_approvals_needed` <a name="reset_approvals_needed" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded"></a>

```python
def reset_approvals_needed() -> None
```

##### `reset_approver_email_recipients` <a name="reset_approver_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients"></a>

```python
def reset_approver_email_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers">approvers</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput">approvals_needed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput">approver_email_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput">approvers_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded">approvals_needed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients">approver_email_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers"></a>

```python
approvers: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a>

---

##### `approvals_needed_input`<sup>Optional</sup> <a name="approvals_needed_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput"></a>

```python
approvals_needed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approver_email_recipients_input`<sup>Optional</sup> <a name="approver_email_recipients_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput"></a>

```python
approver_email_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approvers_input`<sup>Optional</sup> <a name="approvers_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput"></a>

```python
approvers_input: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `approvals_needed`<sup>Required</sup> <a name="approvals_needed" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded"></a>

```python
approvals_needed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approver_email_recipients`<sup>Required</sup> <a name="approver_email_recipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients"></a>

```python
approver_email_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals">put_manual_approvals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_manual_approvals` <a name="put_manual_approvals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals"></a>

```python
def put_manual_approvals(
  steps: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps]],
  require_approver_justification: typing.Union[bool, IResolvable] = None
) -> None
```

###### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#steps GooglePrivilegedAccessManagerEntitlement#steps}

---

###### `require_approver_justification`<sup>Optional</sup> <a name="require_approver_justification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals.parameter.requireApproverJustification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Do the approvers need to provide a justification for their actions?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#require_approver_justification GooglePrivilegedAccessManagerEntitlement#require_approver_justification}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals">manual_approvals</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput">manual_approvals_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manual_approvals`<sup>Required</sup> <a name="manual_approvals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals"></a>

```python
manual_approvals: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a>

---

##### `manual_approvals_input`<sup>Optional</sup> <a name="manual_approvals_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput"></a>

```python
manual_approvals_input: GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementApprovalWorkflow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---


### GooglePrivilegedAccessManagerEntitlementEligibleUsersList <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsersList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementEligibleUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]]

---


### GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivilegedAccessManagerEntitlementEligibleUsers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>]

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings">put_role_bindings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_role_bindings` <a name="put_role_bindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings"></a>

```python
def put_role_bindings(
  value: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings">role_bindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput">role_bindings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_bindings`<sup>Required</sup> <a name="role_bindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings"></a>

```python
role_bindings: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a>

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `role_bindings_input`<sup>Optional</sup> <a name="role_bindings_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput"></a>

```python
role_bindings_input: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]]

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression">reset_condition_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition_expression` <a name="reset_condition_expression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression"></a>

```python
def reset_condition_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput">condition_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression">condition_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_expression_input`<sup>Optional</sup> <a name="condition_expression_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput"></a>

```python
condition_expression_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `condition_expression`<sup>Required</sup> <a name="condition_expression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression"></a>

```python
condition_expression: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess">put_gcp_iam_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcp_iam_access` <a name="put_gcp_iam_access" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess"></a>

```python
def put_gcp_iam_access(
  resource: str,
  resource_type: str,
  role_bindings: typing.Union[IResolvable, typing.List[GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings]]
) -> None
```

###### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess.parameter.resource"></a>

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#resource GooglePrivilegedAccessManagerEntitlement#resource}

---

###### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess.parameter.resourceType"></a>

- *Type:* str

The type of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#resource_type GooglePrivilegedAccessManagerEntitlement#resource_type}

---

###### `role_bindings`<sup>Required</sup> <a name="role_bindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess.parameter.roleBindings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>]]

role_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_privileged_access_manager_entitlement#role_bindings GooglePrivilegedAccessManagerEntitlement#role_bindings}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess">gcp_iam_access</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput">gcp_iam_access_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcp_iam_access`<sup>Required</sup> <a name="gcp_iam_access" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess"></a>

```python
gcp_iam_access: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a>

---

##### `gcp_iam_access_input`<sup>Optional</sup> <a name="gcp_iam_access_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput"></a>

```python
gcp_iam_access_input: GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementPrivilegedAccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory">put_not_mandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured">put_unstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory">reset_not_mandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured">reset_unstructured</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_not_mandatory` <a name="put_not_mandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory"></a>

```python
def put_not_mandatory() -> None
```

##### `put_unstructured` <a name="put_unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured"></a>

```python
def put_unstructured() -> None
```

##### `reset_not_mandatory` <a name="reset_not_mandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory"></a>

```python
def reset_not_mandatory() -> None
```

##### `reset_unstructured` <a name="reset_unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured"></a>

```python
def reset_unstructured() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory">not_mandatory</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured">unstructured</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput">not_mandatory_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput">unstructured_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `not_mandatory`<sup>Required</sup> <a name="not_mandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory"></a>

```python
not_mandatory: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a>

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured"></a>

```python
unstructured: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a>

---

##### `not_mandatory_input`<sup>Optional</sup> <a name="not_mandatory_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput"></a>

```python
not_mandatory_input: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `unstructured_input`<sup>Optional</sup> <a name="unstructured_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput"></a>

```python
unstructured_input: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---


### GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privileged_access_manager_entitlement

googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivilegedAccessManagerEntitlementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>]

---



