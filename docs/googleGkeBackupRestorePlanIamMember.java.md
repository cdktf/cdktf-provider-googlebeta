# `googleGkeBackupRestorePlanIamMember` Submodule <a name="`googleGkeBackupRestorePlanIamMember` Submodule" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeBackupRestorePlanIamMember <a name="GoogleGkeBackupRestorePlanIamMember" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member google_gke_backup_restore_plan_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_backup_restore_plan_iam_member.GoogleGkeBackupRestorePlanIamMember;

GoogleGkeBackupRestorePlanIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .member(java.lang.String)
    .name(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleGkeBackupRestorePlanIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#member GoogleGkeBackupRestorePlanIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#name GoogleGkeBackupRestorePlanIamMember#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#role GoogleGkeBackupRestorePlanIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#id GoogleGkeBackupRestorePlanIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#location GoogleGkeBackupRestorePlanIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#project GoogleGkeBackupRestorePlanIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#member GoogleGkeBackupRestorePlanIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#name GoogleGkeBackupRestorePlanIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#role GoogleGkeBackupRestorePlanIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#condition GoogleGkeBackupRestorePlanIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#id GoogleGkeBackupRestorePlanIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#location GoogleGkeBackupRestorePlanIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#project GoogleGkeBackupRestorePlanIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.putCondition"></a>

```java
public void putCondition(GoogleGkeBackupRestorePlanIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeBackupRestorePlanIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_backup_restore_plan_iam_member.GoogleGkeBackupRestorePlanIamMember;

GoogleGkeBackupRestorePlanIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_backup_restore_plan_iam_member.GoogleGkeBackupRestorePlanIamMember;

GoogleGkeBackupRestorePlanIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_backup_restore_plan_iam_member.GoogleGkeBackupRestorePlanIamMember;

GoogleGkeBackupRestorePlanIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_backup_restore_plan_iam_member.GoogleGkeBackupRestorePlanIamMember;

GoogleGkeBackupRestorePlanIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGkeBackupRestorePlanIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGkeBackupRestorePlanIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGkeBackupRestorePlanIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGkeBackupRestorePlanIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeBackupRestorePlanIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference">GoogleGkeBackupRestorePlanIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.condition"></a>

```java
public GoogleGkeBackupRestorePlanIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference">GoogleGkeBackupRestorePlanIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.conditionInput"></a>

```java
public GoogleGkeBackupRestorePlanIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeBackupRestorePlanIamMemberCondition <a name="GoogleGkeBackupRestorePlanIamMemberCondition" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_backup_restore_plan_iam_member.GoogleGkeBackupRestorePlanIamMemberCondition;

GoogleGkeBackupRestorePlanIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#expression GoogleGkeBackupRestorePlanIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#title GoogleGkeBackupRestorePlanIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#description GoogleGkeBackupRestorePlanIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#expression GoogleGkeBackupRestorePlanIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#title GoogleGkeBackupRestorePlanIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#description GoogleGkeBackupRestorePlanIamMember#description}.

---

### GoogleGkeBackupRestorePlanIamMemberConfig <a name="GoogleGkeBackupRestorePlanIamMemberConfig" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_backup_restore_plan_iam_member.GoogleGkeBackupRestorePlanIamMemberConfig;

GoogleGkeBackupRestorePlanIamMemberConfig.builder()
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
    .member(java.lang.String)
    .name(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleGkeBackupRestorePlanIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#member GoogleGkeBackupRestorePlanIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#name GoogleGkeBackupRestorePlanIamMember#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#role GoogleGkeBackupRestorePlanIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#id GoogleGkeBackupRestorePlanIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#location GoogleGkeBackupRestorePlanIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#project GoogleGkeBackupRestorePlanIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#member GoogleGkeBackupRestorePlanIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#name GoogleGkeBackupRestorePlanIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#role GoogleGkeBackupRestorePlanIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.condition"></a>

```java
public GoogleGkeBackupRestorePlanIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#condition GoogleGkeBackupRestorePlanIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#id GoogleGkeBackupRestorePlanIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#location GoogleGkeBackupRestorePlanIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gke_backup_restore_plan_iam_member#project GoogleGkeBackupRestorePlanIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeBackupRestorePlanIamMemberConditionOutputReference <a name="GoogleGkeBackupRestorePlanIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gke_backup_restore_plan_iam_member.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference;

new GoogleGkeBackupRestorePlanIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupRestorePlanIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeBackupRestorePlanIamMember.GoogleGkeBackupRestorePlanIamMemberCondition">GoogleGkeBackupRestorePlanIamMemberCondition</a>

---



