# `googleGkeHubMembershipRbacRoleBinding` Submodule <a name="`googleGkeHubMembershipRbacRoleBinding` Submodule" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubMembershipRbacRoleBinding <a name="GoogleGkeHubMembershipRbacRoleBinding" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding google_gke_hub_membership_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBinding;

GoogleGkeHubMembershipRbacRoleBinding.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .membershipId(java.lang.String)
    .membershipRbacRoleBindingId(java.lang.String)
    .role(GoogleGkeHubMembershipRbacRoleBindingRole)
    .user(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGkeHubMembershipRbacRoleBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the Membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.membershipId">membershipId</a></code> | <code>java.lang.String</code> | Id of the membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.membershipRbacRoleBindingId">membershipRbacRoleBindingId</a></code> | <code>java.lang.String</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.role">role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the Membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#location GoogleGkeHubMembershipRbacRoleBinding#location}

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.membershipId"></a>

- *Type:* java.lang.String

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_id GoogleGkeHubMembershipRbacRoleBinding#membership_id}

---

##### `membershipRbacRoleBindingId`<sup>Required</sup> <a name="membershipRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.membershipRbacRoleBindingId"></a>

- *Type:* java.lang.String

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_rbac_role_binding_id GoogleGkeHubMembershipRbacRoleBinding#membership_rbac_role_binding_id}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.role"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#role GoogleGkeHubMembershipRbacRoleBinding#role}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.user"></a>

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#user GoogleGkeHubMembershipRbacRoleBinding#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#timeouts GoogleGkeHubMembershipRbacRoleBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole">putRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRole` <a name="putRole" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole"></a>

```java
public void putRole(GoogleGkeHubMembershipRbacRoleBindingRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts"></a>

```java
public void putTimeouts(GoogleGkeHubMembershipRbacRoleBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubMembershipRbacRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBinding;

GoogleGkeHubMembershipRbacRoleBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBinding;

GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBinding;

GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBinding;

GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGkeHubMembershipRbacRoleBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGkeHubMembershipRbacRoleBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGkeHubMembershipRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubMembershipRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.role">role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference">GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList">GoogleGkeHubMembershipRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipIdInput">membershipIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingIdInput">membershipRbacRoleBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.roleInput">roleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipId">membershipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingId">membershipRbacRoleBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.role"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference getRole();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference">GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.state"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingStateList getState();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList">GoogleGkeHubMembershipRbacRoleBindingStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeouts"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membershipIdInput`<sup>Optional</sup> <a name="membershipIdInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipIdInput"></a>

```java
public java.lang.String getMembershipIdInput();
```

- *Type:* java.lang.String

---

##### `membershipRbacRoleBindingIdInput`<sup>Optional</sup> <a name="membershipRbacRoleBindingIdInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingIdInput"></a>

```java
public java.lang.String getMembershipRbacRoleBindingIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.roleInput"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingRole getRoleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipId"></a>

```java
public java.lang.String getMembershipId();
```

- *Type:* java.lang.String

---

##### `membershipRbacRoleBindingId`<sup>Required</sup> <a name="membershipRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingId"></a>

```java
public java.lang.String getMembershipRbacRoleBindingId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubMembershipRbacRoleBindingConfig <a name="GoogleGkeHubMembershipRbacRoleBindingConfig" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBindingConfig;

GoogleGkeHubMembershipRbacRoleBindingConfig.builder()
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
    .location(java.lang.String)
    .membershipId(java.lang.String)
    .membershipRbacRoleBindingId(java.lang.String)
    .role(GoogleGkeHubMembershipRbacRoleBindingRole)
    .user(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGkeHubMembershipRbacRoleBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the Membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipId">membershipId</a></code> | <code>java.lang.String</code> | Id of the membership. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipRbacRoleBindingId">membershipRbacRoleBindingId</a></code> | <code>java.lang.String</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.role">role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.user">user</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the Membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#location GoogleGkeHubMembershipRbacRoleBinding#location}

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipId"></a>

```java
public java.lang.String getMembershipId();
```

- *Type:* java.lang.String

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_id GoogleGkeHubMembershipRbacRoleBinding#membership_id}

---

##### `membershipRbacRoleBindingId`<sup>Required</sup> <a name="membershipRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipRbacRoleBindingId"></a>

```java
public java.lang.String getMembershipRbacRoleBindingId();
```

- *Type:* java.lang.String

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_rbac_role_binding_id GoogleGkeHubMembershipRbacRoleBinding#membership_rbac_role_binding_id}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.role"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingRole getRole();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#role GoogleGkeHubMembershipRbacRoleBinding#role}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#user GoogleGkeHubMembershipRbacRoleBinding#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.timeouts"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#timeouts GoogleGkeHubMembershipRbacRoleBinding#timeouts}

---

### GoogleGkeHubMembershipRbacRoleBindingRole <a name="GoogleGkeHubMembershipRbacRoleBindingRole" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBindingRole;

GoogleGkeHubMembershipRbacRoleBindingRole.builder()
    .predefinedRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.property.predefinedRole">predefinedRole</a></code> | <code>java.lang.String</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW", "ANTHOS_SUPPORT"]. |

---

##### `predefinedRole`<sup>Required</sup> <a name="predefinedRole" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.property.predefinedRole"></a>

```java
public java.lang.String getPredefinedRole();
```

- *Type:* java.lang.String

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW", "ANTHOS_SUPPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#predefined_role GoogleGkeHubMembershipRbacRoleBinding#predefined_role}

---

### GoogleGkeHubMembershipRbacRoleBindingState <a name="GoogleGkeHubMembershipRbacRoleBindingState" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBindingState;

GoogleGkeHubMembershipRbacRoleBindingState.builder()
    .build();
```


### GoogleGkeHubMembershipRbacRoleBindingTimeouts <a name="GoogleGkeHubMembershipRbacRoleBindingTimeouts" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBindingTimeouts;

GoogleGkeHubMembershipRbacRoleBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#create GoogleGkeHubMembershipRbacRoleBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#delete GoogleGkeHubMembershipRbacRoleBinding#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#create GoogleGkeHubMembershipRbacRoleBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_gke_hub_membership_rbac_role_binding#delete GoogleGkeHubMembershipRbacRoleBinding#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference;

new GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">predefinedRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRole">predefinedRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predefinedRoleInput`<sup>Optional</sup> <a name="predefinedRoleInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```java
public java.lang.String getPredefinedRoleInput();
```

- *Type:* java.lang.String

---

##### `predefinedRole`<sup>Required</sup> <a name="predefinedRole" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```java
public java.lang.String getPredefinedRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingRole getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---


### GoogleGkeHubMembershipRbacRoleBindingStateList <a name="GoogleGkeHubMembershipRbacRoleBindingStateList" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBindingStateList;

new GoogleGkeHubMembershipRbacRoleBindingStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeHubMembershipRbacRoleBindingStateOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference;

new GoogleGkeHubMembershipRbacRoleBindingStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState">GoogleGkeHubMembershipRbacRoleBindingState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubMembershipRbacRoleBindingState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState">GoogleGkeHubMembershipRbacRoleBindingState</a>

---


### GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_membership_rbac_role_binding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference;

new GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

---



