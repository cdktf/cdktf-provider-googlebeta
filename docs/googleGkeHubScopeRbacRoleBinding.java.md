# `googleGkeHubScopeRbacRoleBinding` Submodule <a name="`googleGkeHubScopeRbacRoleBinding` Submodule" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubScopeRbacRoleBinding <a name="GoogleGkeHubScopeRbacRoleBinding" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBinding;

GoogleGkeHubScopeRbacRoleBinding.Builder.create(Construct scope, java.lang.String id)
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
    .role(GoogleGkeHubScopeRbacRoleBindingRole)
    .scopeId(java.lang.String)
    .scopeRbacRoleBindingId(java.lang.String)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleGkeHubScopeRbacRoleBindingTimeouts)
//  .user(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.role">role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>java.lang.String</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#id GoogleGkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#project GoogleGkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.role"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#role GoogleGkeHubScopeRbacRoleBinding#role}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#scope_id GoogleGkeHubScopeRbacRoleBinding#scope_id}

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.scopeRbacRoleBindingId"></a>

- *Type:* java.lang.String

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GoogleGkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.group"></a>

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#group GoogleGkeHubScopeRbacRoleBinding#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#id GoogleGkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#labels GoogleGkeHubScopeRbacRoleBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#project GoogleGkeHubScopeRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#timeouts GoogleGkeHubScopeRbacRoleBinding#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.Initializer.parameter.user"></a>

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#user GoogleGkeHubScopeRbacRoleBinding#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole">putRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRole` <a name="putRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole"></a>

```java
public void putRole(GoogleGkeHubScopeRbacRoleBindingRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts"></a>

```java
public void putTimeouts(GoogleGkeHubScopeRbacRoleBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.resetUser"></a>

```java
public void resetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBinding;

GoogleGkeHubScopeRbacRoleBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBinding;

GoogleGkeHubScopeRbacRoleBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBinding;

GoogleGkeHubScopeRbacRoleBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBinding;

GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGkeHubScopeRbacRoleBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGkeHubScopeRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubScopeRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.role">role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference">GoogleGkeHubScopeRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.state">state</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList">GoogleGkeHubScopeRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.roleInput">roleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput">scopeRbacRoleBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.role"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingRoleOutputReference getRole();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference">GoogleGkeHubScopeRbacRoleBindingRoleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.state"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingStateList getState();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList">GoogleGkeHubScopeRbacRoleBindingStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeouts"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.roleInput"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingRole getRoleInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `scopeRbacRoleBindingIdInput`<sup>Optional</sup> <a name="scopeRbacRoleBindingIdInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput"></a>

```java
public java.lang.String getScopeRbacRoleBindingIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId"></a>

```java
public java.lang.String getScopeRbacRoleBindingId();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubScopeRbacRoleBindingConfig <a name="GoogleGkeHubScopeRbacRoleBindingConfig" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBindingConfig;

GoogleGkeHubScopeRbacRoleBindingConfig.builder()
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
    .role(GoogleGkeHubScopeRbacRoleBindingRole)
    .scopeId(java.lang.String)
    .scopeRbacRoleBindingId(java.lang.String)
//  .group(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleGkeHubScopeRbacRoleBindingTimeouts)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.role">role</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId">scopeRbacRoleBindingId</a></code> | <code>java.lang.String</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.group">group</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#id GoogleGkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#project GoogleGkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.user">user</a></code> | <code>java.lang.String</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.role"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingRole getRole();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#role GoogleGkeHubScopeRbacRoleBinding#role}

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#scope_id GoogleGkeHubScopeRbacRoleBinding#scope_id}

---

##### `scopeRbacRoleBindingId`<sup>Required</sup> <a name="scopeRbacRoleBindingId" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId"></a>

```java
public java.lang.String getScopeRbacRoleBindingId();
```

- *Type:* java.lang.String

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GoogleGkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#group GoogleGkeHubScopeRbacRoleBinding#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#id GoogleGkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#labels GoogleGkeHubScopeRbacRoleBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#project GoogleGkeHubScopeRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.timeouts"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#timeouts GoogleGkeHubScopeRbacRoleBinding#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#user GoogleGkeHubScopeRbacRoleBinding#user}

---

### GoogleGkeHubScopeRbacRoleBindingRole <a name="GoogleGkeHubScopeRbacRoleBindingRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBindingRole;

GoogleGkeHubScopeRbacRoleBindingRole.builder()
//  .customRole(java.lang.String)
//  .predefinedRole(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.property.customRole">customRole</a></code> | <code>java.lang.String</code> | CustomRole is the custom Kubernetes ClusterRole to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.property.predefinedRole">predefinedRole</a></code> | <code>java.lang.String</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"]. |

---

##### `customRole`<sup>Optional</sup> <a name="customRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.property.customRole"></a>

```java
public java.lang.String getCustomRole();
```

- *Type:* java.lang.String

CustomRole is the custom Kubernetes ClusterRole to be used.

The custom role format must be allowlisted in the rbacrolebindingactuation feature and RFC 1123 compliant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#custom_role GoogleGkeHubScopeRbacRoleBinding#custom_role}

---

##### `predefinedRole`<sup>Optional</sup> <a name="predefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole.property.predefinedRole"></a>

```java
public java.lang.String getPredefinedRole();
```

- *Type:* java.lang.String

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#predefined_role GoogleGkeHubScopeRbacRoleBinding#predefined_role}

---

### GoogleGkeHubScopeRbacRoleBindingState <a name="GoogleGkeHubScopeRbacRoleBindingState" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBindingState;

GoogleGkeHubScopeRbacRoleBindingState.builder()
    .build();
```


### GoogleGkeHubScopeRbacRoleBindingTimeouts <a name="GoogleGkeHubScopeRbacRoleBindingTimeouts" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBindingTimeouts;

GoogleGkeHubScopeRbacRoleBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#create GoogleGkeHubScopeRbacRoleBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#delete GoogleGkeHubScopeRbacRoleBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#update GoogleGkeHubScopeRbacRoleBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#create GoogleGkeHubScopeRbacRoleBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#delete GoogleGkeHubScopeRbacRoleBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_gke_hub_scope_rbac_role_binding#update GoogleGkeHubScopeRbacRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubScopeRbacRoleBindingRoleOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingRoleOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference;

new GoogleGkeHubScopeRbacRoleBindingRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resetCustomRole">resetCustomRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole">resetPredefinedRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomRole` <a name="resetCustomRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resetCustomRole"></a>

```java
public void resetCustomRole()
```

##### `resetPredefinedRole` <a name="resetPredefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole"></a>

```java
public void resetPredefinedRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.customRoleInput">customRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">predefinedRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.customRole">customRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole">predefinedRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRoleInput`<sup>Optional</sup> <a name="customRoleInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.customRoleInput"></a>

```java
public java.lang.String getCustomRoleInput();
```

- *Type:* java.lang.String

---

##### `predefinedRoleInput`<sup>Optional</sup> <a name="predefinedRoleInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```java
public java.lang.String getPredefinedRoleInput();
```

- *Type:* java.lang.String

---

##### `customRole`<sup>Required</sup> <a name="customRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.customRole"></a>

```java
public java.lang.String getCustomRole();
```

- *Type:* java.lang.String

---

##### `predefinedRole`<sup>Required</sup> <a name="predefinedRole" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```java
public java.lang.String getPredefinedRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingRole getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingRole">GoogleGkeHubScopeRbacRoleBindingRole</a>

---


### GoogleGkeHubScopeRbacRoleBindingStateList <a name="GoogleGkeHubScopeRbacRoleBindingStateList" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBindingStateList;

new GoogleGkeHubScopeRbacRoleBindingStateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingStateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeHubScopeRbacRoleBindingStateOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingStateOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference;

new GoogleGkeHubScopeRbacRoleBindingStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState">GoogleGkeHubScopeRbacRoleBindingState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubScopeRbacRoleBindingState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingState">GoogleGkeHubScopeRbacRoleBindingState</a>

---


### GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference <a name="GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_hub_scope_rbac_role_binding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference;

new GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGkeHubScopeRbacRoleBinding.GoogleGkeHubScopeRbacRoleBindingTimeouts">GoogleGkeHubScopeRbacRoleBindingTimeouts</a>

---



