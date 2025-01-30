# `googlePrivilegedAccessManagerEntitlement` Submodule <a name="`googlePrivilegedAccessManagerEntitlement` Submodule" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivilegedAccessManagerEntitlement <a name="GooglePrivilegedAccessManagerEntitlement" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement google_privileged_access_manager_entitlement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlement;

GooglePrivilegedAccessManagerEntitlement.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .eligibleUsers(IResolvable)
    .eligibleUsers(java.util.List<GooglePrivilegedAccessManagerEntitlementEligibleUsers>)
    .entitlementId(java.lang.String)
    .location(java.lang.String)
    .maxRequestDuration(java.lang.String)
    .parent(java.lang.String)
    .privilegedAccess(GooglePrivilegedAccessManagerEntitlementPrivilegedAccess)
    .requesterJustificationConfig(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig)
//  .additionalNotificationTargets(GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets)
//  .approvalWorkflow(GooglePrivilegedAccessManagerEntitlementApprovalWorkflow)
//  .id(java.lang.String)
//  .timeouts(GooglePrivilegedAccessManagerEntitlementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.eligibleUsers">eligibleUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>></code> | eligible_users block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.maxRequestDuration">maxRequestDuration</a></code> | <code>java.lang.String</code> | The maximum amount of time for which access would be granted for a request. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.privilegedAccess">privilegedAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | privileged_access block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.requesterJustificationConfig">requesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | requester_justification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.additionalNotificationTargets">additionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | additional_notification_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | approval_workflow block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eligibleUsers`<sup>Required</sup> <a name="eligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.eligibleUsers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>>

eligible_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#eligible_users GooglePrivilegedAccessManagerEntitlement#eligible_users}

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.entitlementId"></a>

- *Type:* java.lang.String

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#entitlement_id GooglePrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#location GooglePrivilegedAccessManagerEntitlement#location}

---

##### `maxRequestDuration`<sup>Required</sup> <a name="maxRequestDuration" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.maxRequestDuration"></a>

- *Type:* java.lang.String

The maximum amount of time for which access would be granted for a request.

A requester can choose to ask for access for less than this duration but never more.
Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#max_request_duration GooglePrivilegedAccessManagerEntitlement#max_request_duration}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#parent GooglePrivilegedAccessManagerEntitlement#parent}

---

##### `privilegedAccess`<sup>Required</sup> <a name="privilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.privilegedAccess"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

privileged_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#privileged_access GooglePrivilegedAccessManagerEntitlement#privileged_access}

---

##### `requesterJustificationConfig`<sup>Required</sup> <a name="requesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.requesterJustificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

requester_justification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#requester_justification_config GooglePrivilegedAccessManagerEntitlement#requester_justification_config}

---

##### `additionalNotificationTargets`<sup>Optional</sup> <a name="additionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.additionalNotificationTargets"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

additional_notification_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#additional_notification_targets GooglePrivilegedAccessManagerEntitlement#additional_notification_targets}

---

##### `approvalWorkflow`<sup>Optional</sup> <a name="approvalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.approvalWorkflow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

approval_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#approval_workflow GooglePrivilegedAccessManagerEntitlement#approval_workflow}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#timeouts GooglePrivilegedAccessManagerEntitlement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets">putAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow">putApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers">putEligibleUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess">putPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig">putRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets">resetAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetApprovalWorkflow">resetApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalNotificationTargets` <a name="putAdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets"></a>

```java
public void putAdditionalNotificationTargets(GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `putApprovalWorkflow` <a name="putApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow"></a>

```java
public void putApprovalWorkflow(GooglePrivilegedAccessManagerEntitlementApprovalWorkflow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putApprovalWorkflow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `putEligibleUsers` <a name="putEligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers"></a>

```java
public void putEligibleUsers(IResolvable OR java.util.List<GooglePrivilegedAccessManagerEntitlementEligibleUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putEligibleUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>>

---

##### `putPrivilegedAccess` <a name="putPrivilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess"></a>

```java
public void putPrivilegedAccess(GooglePrivilegedAccessManagerEntitlementPrivilegedAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putPrivilegedAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `putRequesterJustificationConfig` <a name="putRequesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig"></a>

```java
public void putRequesterJustificationConfig(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putRequesterJustificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts"></a>

```java
public void putTimeouts(GooglePrivilegedAccessManagerEntitlementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

---

##### `resetAdditionalNotificationTargets` <a name="resetAdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets"></a>

```java
public void resetAdditionalNotificationTargets()
```

##### `resetApprovalWorkflow` <a name="resetApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetApprovalWorkflow"></a>

```java
public void resetApprovalWorkflow()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlement;

GooglePrivilegedAccessManagerEntitlement.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlement;

GooglePrivilegedAccessManagerEntitlement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlement;

GooglePrivilegedAccessManagerEntitlement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlement;

GooglePrivilegedAccessManagerEntitlement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GooglePrivilegedAccessManagerEntitlement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GooglePrivilegedAccessManagerEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GooglePrivilegedAccessManagerEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivilegedAccessManagerEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets">additionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsers">eligibleUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList">GooglePrivilegedAccessManagerEntitlementEligibleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccess">privilegedAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig">requesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference">GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput">additionalNotificationTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflowInput">approvalWorkflowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsersInput">eligibleUsersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput">entitlementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDurationInput">maxRequestDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccessInput">privilegedAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput">requesterJustificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration">maxRequestDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalNotificationTargets`<sup>Required</sup> <a name="additionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargets"></a>

```java
public GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference getAdditionalNotificationTargets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a>

---

##### `approvalWorkflow`<sup>Required</sup> <a name="approvalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflow"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference getApprovalWorkflow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `eligibleUsers`<sup>Required</sup> <a name="eligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsers"></a>

```java
public GooglePrivilegedAccessManagerEntitlementEligibleUsersList getEligibleUsers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList">GooglePrivilegedAccessManagerEntitlementEligibleUsersList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privilegedAccess`<sup>Required</sup> <a name="privilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccess"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference getPrivilegedAccess();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a>

---

##### `requesterJustificationConfig`<sup>Required</sup> <a name="requesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfig"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference getRequesterJustificationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeouts"></a>

```java
public GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference">GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `additionalNotificationTargetsInput`<sup>Optional</sup> <a name="additionalNotificationTargetsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets getAdditionalNotificationTargetsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `approvalWorkflowInput`<sup>Optional</sup> <a name="approvalWorkflowInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.approvalWorkflowInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflow getApprovalWorkflowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `eligibleUsersInput`<sup>Optional</sup> <a name="eligibleUsersInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.eligibleUsersInput"></a>

```java
public java.lang.Object getEligibleUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>>

---

##### `entitlementIdInput`<sup>Optional</sup> <a name="entitlementIdInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementIdInput"></a>

```java
public java.lang.String getEntitlementIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxRequestDurationInput`<sup>Optional</sup> <a name="maxRequestDurationInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDurationInput"></a>

```java
public java.lang.String getMaxRequestDurationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `privilegedAccessInput`<sup>Optional</sup> <a name="privilegedAccessInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.privilegedAccessInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccess getPrivilegedAccessInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `requesterJustificationConfigInput`<sup>Optional</sup> <a name="requesterJustificationConfigInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig getRequesterJustificationConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxRequestDuration`<sup>Required</sup> <a name="maxRequestDuration" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.maxRequestDuration"></a>

```java
public java.lang.String getMaxRequestDuration();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets <a name="GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets;

GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.builder()
//  .adminEmailRecipients(java.util.List<java.lang.String>)
//  .requesterEmailRecipients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients">adminEmailRecipients</a></code> | <code>java.util.List<java.lang.String></code> | Optional. Additional email addresses to be notified when a principal(requester) is granted access. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients">requesterEmailRecipients</a></code> | <code>java.util.List<java.lang.String></code> | Optional. Additional email address to be notified about an eligible entitlement. |

---

##### `adminEmailRecipients`<sup>Optional</sup> <a name="adminEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients"></a>

```java
public java.util.List<java.lang.String> getAdminEmailRecipients();
```

- *Type:* java.util.List<java.lang.String>

Optional. Additional email addresses to be notified when a principal(requester) is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#admin_email_recipients GooglePrivilegedAccessManagerEntitlement#admin_email_recipients}

---

##### `requesterEmailRecipients`<sup>Optional</sup> <a name="requesterEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients"></a>

```java
public java.util.List<java.lang.String> getRequesterEmailRecipients();
```

- *Type:* java.util.List<java.lang.String>

Optional. Additional email address to be notified about an eligible entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#requester_email_recipients GooglePrivilegedAccessManagerEntitlement#requester_email_recipients}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflow <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow;

GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.builder()
    .manualApprovals(GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals">manualApprovals</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | manual_approvals block. |

---

##### `manualApprovals`<sup>Required</sup> <a name="manualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals getManualApprovals();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

manual_approvals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#manual_approvals GooglePrivilegedAccessManagerEntitlement#manual_approvals}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals;

GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.builder()
    .steps(IResolvable)
    .steps(java.util.List<GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps>)
//  .requireApproverJustification(java.lang.Boolean)
//  .requireApproverJustification(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>></code> | steps block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification">requireApproverJustification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Do the approvers need to provide a justification for their actions? |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps"></a>

```java
public java.lang.Object getSteps();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>>

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#steps GooglePrivilegedAccessManagerEntitlement#steps}

---

##### `requireApproverJustification`<sup>Optional</sup> <a name="requireApproverJustification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification"></a>

```java
public java.lang.Object getRequireApproverJustification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Do the approvers need to provide a justification for their actions?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#require_approver_justification GooglePrivilegedAccessManagerEntitlement#require_approver_justification}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps;

GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.builder()
    .approvers(GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers)
//  .approvalsNeeded(java.lang.Number)
//  .approverEmailRecipients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers">approvers</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | approvers block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded">approvalsNeeded</a></code> | <code>java.lang.Number</code> | How many users from the above list need to approve. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients">approverEmailRecipients</a></code> | <code>java.util.List<java.lang.String></code> | Optional. Additional email addresses to be notified when a grant is pending approval. |

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers getApprovers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

approvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#approvers GooglePrivilegedAccessManagerEntitlement#approvers}

---

##### `approvalsNeeded`<sup>Optional</sup> <a name="approvalsNeeded" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded"></a>

```java
public java.lang.Number getApprovalsNeeded();
```

- *Type:* java.lang.Number

How many users from the above list need to approve.

If there are not enough distinct users in the list above then the workflow
will indefinitely block. Should always be greater than 0. Currently 1 is the only
supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#approvals_needed GooglePrivilegedAccessManagerEntitlement#approvals_needed}

---

##### `approverEmailRecipients`<sup>Optional</sup> <a name="approverEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients"></a>

```java
public java.util.List<java.lang.String> getApproverEmailRecipients();
```

- *Type:* java.util.List<java.lang.String>

Optional. Additional email addresses to be notified when a grant is pending approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#approver_email_recipients GooglePrivilegedAccessManagerEntitlement#approver_email_recipients}

---

### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers;

GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.builder()
    .principals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | Users who are being allowed for the operation. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}

---

### GooglePrivilegedAccessManagerEntitlementConfig <a name="GooglePrivilegedAccessManagerEntitlementConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementConfig;

GooglePrivilegedAccessManagerEntitlementConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .eligibleUsers(IResolvable)
    .eligibleUsers(java.util.List<GooglePrivilegedAccessManagerEntitlementEligibleUsers>)
    .entitlementId(java.lang.String)
    .location(java.lang.String)
    .maxRequestDuration(java.lang.String)
    .parent(java.lang.String)
    .privilegedAccess(GooglePrivilegedAccessManagerEntitlementPrivilegedAccess)
    .requesterJustificationConfig(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig)
//  .additionalNotificationTargets(GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets)
//  .approvalWorkflow(GooglePrivilegedAccessManagerEntitlementApprovalWorkflow)
//  .id(java.lang.String)
//  .timeouts(GooglePrivilegedAccessManagerEntitlementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.eligibleUsers">eligibleUsers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>></code> | eligible_users block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration">maxRequestDuration</a></code> | <code>java.lang.String</code> | The maximum amount of time for which access would be granted for a request. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.privilegedAccess">privilegedAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | privileged_access block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig">requesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | requester_justification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets">additionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | additional_notification_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow">approvalWorkflow</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | approval_workflow block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eligibleUsers`<sup>Required</sup> <a name="eligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.eligibleUsers"></a>

```java
public java.lang.Object getEligibleUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>>

eligible_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#eligible_users GooglePrivilegedAccessManagerEntitlement#eligible_users}

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#entitlement_id GooglePrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#location GooglePrivilegedAccessManagerEntitlement#location}

---

##### `maxRequestDuration`<sup>Required</sup> <a name="maxRequestDuration" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration"></a>

```java
public java.lang.String getMaxRequestDuration();
```

- *Type:* java.lang.String

The maximum amount of time for which access would be granted for a request.

A requester can choose to ask for access for less than this duration but never more.
Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#max_request_duration GooglePrivilegedAccessManagerEntitlement#max_request_duration}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#parent GooglePrivilegedAccessManagerEntitlement#parent}

---

##### `privilegedAccess`<sup>Required</sup> <a name="privilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.privilegedAccess"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccess getPrivilegedAccess();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

privileged_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#privileged_access GooglePrivilegedAccessManagerEntitlement#privileged_access}

---

##### `requesterJustificationConfig`<sup>Required</sup> <a name="requesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig getRequesterJustificationConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

requester_justification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#requester_justification_config GooglePrivilegedAccessManagerEntitlement#requester_justification_config}

---

##### `additionalNotificationTargets`<sup>Optional</sup> <a name="additionalNotificationTargets" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets"></a>

```java
public GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets getAdditionalNotificationTargets();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

additional_notification_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#additional_notification_targets GooglePrivilegedAccessManagerEntitlement#additional_notification_targets}

---

##### `approvalWorkflow`<sup>Optional</sup> <a name="approvalWorkflow" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflow getApprovalWorkflow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

approval_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#approval_workflow GooglePrivilegedAccessManagerEntitlement#approval_workflow}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#id GooglePrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementConfig.property.timeouts"></a>

```java
public GooglePrivilegedAccessManagerEntitlementTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#timeouts GooglePrivilegedAccessManagerEntitlement#timeouts}

---

### GooglePrivilegedAccessManagerEntitlementEligibleUsers <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers;

GooglePrivilegedAccessManagerEntitlementEligibleUsers.builder()
    .principals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | Users who are being allowed for the operation. |

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at "https://cloud.google.com/iam/docs/principal-identifiers#v1"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#principals GooglePrivilegedAccessManagerEntitlement#principals}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccess <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess;

GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.builder()
    .gcpIamAccess(GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess">gcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | gcp_iam_access block. |

---

##### `gcpIamAccess`<sup>Required</sup> <a name="gcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess getGcpIamAccess();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

gcp_iam_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#gcp_iam_access GooglePrivilegedAccessManagerEntitlement#gcp_iam_access}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess;

GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.builder()
    .resource(java.lang.String)
    .resourceType(java.lang.String)
    .roleBindings(IResolvable)
    .roleBindings(java.util.List<GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource">resource</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | The type of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings">roleBindings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>></code> | role_bindings block. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#resource GooglePrivilegedAccessManagerEntitlement#resource}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

The type of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#resource_type GooglePrivilegedAccessManagerEntitlement#resource_type}

---

##### `roleBindings`<sup>Required</sup> <a name="roleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings"></a>

```java
public java.lang.Object getRoleBindings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>>

role_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#role_bindings GooglePrivilegedAccessManagerEntitlement#role_bindings}

---

### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings;

GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.builder()
    .role(java.lang.String)
//  .conditionExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role">role</a></code> | <code>java.lang.String</code> | IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression">conditionExpression</a></code> | <code>java.lang.String</code> | The expression field of the IAM condition to be associated with the role. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#role GooglePrivilegedAccessManagerEntitlement#role}

---

##### `conditionExpression`<sup>Optional</sup> <a name="conditionExpression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression"></a>

```java
public java.lang.String getConditionExpression();
```

- *Type:* java.lang.String

The expression field of the IAM condition to be associated with the role.

If specified, a user with an active grant for this entitlement would be able to access the resource only if this condition evaluates to true for their request.
https://cloud.google.com/iam/docs/conditions-overview#attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#condition_expression GooglePrivilegedAccessManagerEntitlement#condition_expression}

---

### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig;

GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.builder()
//  .notMandatory(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory)
//  .unstructured(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory">notMandatory</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | not_mandatory block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured">unstructured</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | unstructured block. |

---

##### `notMandatory`<sup>Optional</sup> <a name="notMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory getNotMandatory();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

not_mandatory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#not_mandatory GooglePrivilegedAccessManagerEntitlement#not_mandatory}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured getUnstructured();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

unstructured block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#unstructured GooglePrivilegedAccessManagerEntitlement#unstructured}

---

### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory;

GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.builder()
    .build();
```


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured;

GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.builder()
    .build();
```


### GooglePrivilegedAccessManagerEntitlementTimeouts <a name="GooglePrivilegedAccessManagerEntitlementTimeouts" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementTimeouts;

GooglePrivilegedAccessManagerEntitlementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#create GooglePrivilegedAccessManagerEntitlement#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#delete GooglePrivilegedAccessManagerEntitlement#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#update GooglePrivilegedAccessManagerEntitlement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#create GooglePrivilegedAccessManagerEntitlement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#delete GooglePrivilegedAccessManagerEntitlement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_privileged_access_manager_entitlement#update GooglePrivilegedAccessManagerEntitlement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference;

new GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients">resetAdminEmailRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients">resetRequesterEmailRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminEmailRecipients` <a name="resetAdminEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients"></a>

```java
public void resetAdminEmailRecipients()
```

##### `resetRequesterEmailRecipients` <a name="resetRequesterEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients"></a>

```java
public void resetRequesterEmailRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput">adminEmailRecipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput">requesterEmailRecipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients">adminEmailRecipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients">requesterEmailRecipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminEmailRecipientsInput`<sup>Optional</sup> <a name="adminEmailRecipientsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput"></a>

```java
public java.util.List<java.lang.String> getAdminEmailRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requesterEmailRecipientsInput`<sup>Optional</sup> <a name="requesterEmailRecipientsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput"></a>

```java
public java.util.List<java.lang.String> getRequesterEmailRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminEmailRecipients`<sup>Required</sup> <a name="adminEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients"></a>

```java
public java.util.List<java.lang.String> getAdminEmailRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requesterEmailRecipients`<sup>Required</sup> <a name="requesterEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients"></a>

```java
public java.util.List<java.lang.String> getRequesterEmailRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets">GooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification">resetRequireApproverJustification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps"></a>

```java
public void putSteps(IResolvable OR java.util.List<GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>>

---

##### `resetRequireApproverJustification` <a name="resetRequireApproverJustification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification"></a>

```java
public void resetRequireApproverJustification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput">requireApproverJustificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput">stepsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification">requireApproverJustification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList getSteps();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a>

---

##### `requireApproverJustificationInput`<sup>Optional</sup> <a name="requireApproverJustificationInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput"></a>

```java
public java.lang.Object getRequireApproverJustificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput"></a>

```java
public java.lang.Object getStepsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>>

---

##### `requireApproverJustification`<sup>Required</sup> <a name="requireApproverJustification" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification"></a>

```java
public java.lang.Object getRequireApproverJustification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput">principalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers">putApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded">resetApprovalsNeeded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients">resetApproverEmailRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApprovers` <a name="putApprovers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers"></a>

```java
public void putApprovers(GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `resetApprovalsNeeded` <a name="resetApprovalsNeeded" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded"></a>

```java
public void resetApprovalsNeeded()
```

##### `resetApproverEmailRecipients` <a name="resetApproverEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients"></a>

```java
public void resetApproverEmailRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers">approvers</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput">approvalsNeededInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput">approverEmailRecipientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput">approversInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded">approvalsNeeded</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients">approverEmailRecipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference getApprovers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a>

---

##### `approvalsNeededInput`<sup>Optional</sup> <a name="approvalsNeededInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput"></a>

```java
public java.lang.Number getApprovalsNeededInput();
```

- *Type:* java.lang.Number

---

##### `approverEmailRecipientsInput`<sup>Optional</sup> <a name="approverEmailRecipientsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput"></a>

```java
public java.util.List<java.lang.String> getApproverEmailRecipientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approversInput`<sup>Optional</sup> <a name="approversInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers getApproversInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `approvalsNeeded`<sup>Required</sup> <a name="approvalsNeeded" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded"></a>

```java
public java.lang.Number getApprovalsNeeded();
```

- *Type:* java.lang.Number

---

##### `approverEmailRecipients`<sup>Required</sup> <a name="approverEmailRecipients" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients"></a>

```java
public java.util.List<java.lang.String> getApproverEmailRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps</a>

---


### GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference <a name="GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference;

new GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals">putManualApprovals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManualApprovals` <a name="putManualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals"></a>

```java
public void putManualApprovals(GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals">manualApprovals</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput">manualApprovalsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manualApprovals`<sup>Required</sup> <a name="manualApprovals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference getManualApprovals();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a>

---

##### `manualApprovalsInput`<sup>Optional</sup> <a name="manualApprovalsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals getManualApprovalsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">GooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementApprovalWorkflow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementApprovalWorkflow">GooglePrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---


### GooglePrivilegedAccessManagerEntitlementEligibleUsersList <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsersList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList;

new GooglePrivilegedAccessManagerEntitlementEligibleUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get"></a>

```java
public GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>>

---


### GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference <a name="GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference;

new GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput">principalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalsInput`<sup>Optional</sup> <a name="principalsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput"></a>

```java
public java.util.List<java.lang.String> getPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementEligibleUsers">GooglePrivilegedAccessManagerEntitlementEligibleUsers</a>

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings">putRoleBindings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoleBindings` <a name="putRoleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings"></a>

```java
public void putRoleBindings(IResolvable OR java.util.List<GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings">roleBindings</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput">roleBindingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleBindings`<sup>Required</sup> <a name="roleBindings" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList getRoleBindings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `roleBindingsInput`<sup>Optional</sup> <a name="roleBindingsInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput"></a>

```java
public java.lang.Object getRoleBindingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>>

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression">resetConditionExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConditionExpression` <a name="resetConditionExpression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression"></a>

```java
public void resetConditionExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput">conditionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression">conditionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionExpressionInput`<sup>Optional</sup> <a name="conditionExpressionInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput"></a>

```java
public java.lang.String getConditionExpressionInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `conditionExpression`<sup>Required</sup> <a name="conditionExpression" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression"></a>

```java
public java.lang.String getConditionExpression();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings</a>

---


### GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference <a name="GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference;

new GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess">putGcpIamAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcpIamAccess` <a name="putGcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess"></a>

```java
public void putGcpIamAccess(GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess">gcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput">gcpIamAccessInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcpIamAccess`<sup>Required</sup> <a name="gcpIamAccess" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference getGcpIamAccess();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a>

---

##### `gcpIamAccessInput`<sup>Optional</sup> <a name="gcpIamAccessInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess getGcpIamAccessInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementPrivilegedAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementPrivilegedAccess">GooglePrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory">putNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured">putUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory">resetNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured">resetUnstructured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotMandatory` <a name="putNotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory"></a>

```java
public void putNotMandatory(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `putUnstructured` <a name="putUnstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured"></a>

```java
public void putUnstructured(GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `resetNotMandatory` <a name="resetNotMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory"></a>

```java
public void resetNotMandatory()
```

##### `resetUnstructured` <a name="resetUnstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured"></a>

```java
public void resetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory">notMandatory</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured">unstructured</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput">notMandatoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput">unstructuredInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notMandatory`<sup>Required</sup> <a name="notMandatory" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference getNotMandatory();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a>

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference getUnstructured();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a>

---

##### `notMandatoryInput`<sup>Optional</sup> <a name="notMandatoryInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory getNotMandatoryInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `unstructuredInput`<sup>Optional</sup> <a name="unstructuredInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured getUnstructuredInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---


### GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference <a name="GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference;

new GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue"></a>

```java
public GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">GooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---


### GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference <a name="GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_privileged_access_manager_entitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference;

new GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePrivilegedAccessManagerEntitlement.GooglePrivilegedAccessManagerEntitlementTimeouts">GooglePrivilegedAccessManagerEntitlementTimeouts</a>

---



