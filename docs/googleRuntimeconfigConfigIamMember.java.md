# `googleRuntimeconfigConfigIamMember` Submodule <a name="`googleRuntimeconfigConfigIamMember` Submodule" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRuntimeconfigConfigIamMember <a name="GoogleRuntimeconfigConfigIamMember" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member google_runtimeconfig_config_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_runtimeconfig_config_iam_member.GoogleRuntimeconfigConfigIamMember;

GoogleRuntimeconfigConfigIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .config(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleRuntimeconfigConfigIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.config">config</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#config GoogleRuntimeconfigConfigIamMember#config}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#member GoogleRuntimeconfigConfigIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#role GoogleRuntimeconfigConfigIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#id GoogleRuntimeconfigConfigIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#project GoogleRuntimeconfigConfigIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.config"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#config GoogleRuntimeconfigConfigIamMember#config}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#member GoogleRuntimeconfigConfigIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#role GoogleRuntimeconfigConfigIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#condition GoogleRuntimeconfigConfigIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#id GoogleRuntimeconfigConfigIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#project GoogleRuntimeconfigConfigIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.putCondition"></a>

```java
public void putCondition(GoogleRuntimeconfigConfigIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleRuntimeconfigConfigIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_runtimeconfig_config_iam_member.GoogleRuntimeconfigConfigIamMember;

GoogleRuntimeconfigConfigIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_runtimeconfig_config_iam_member.GoogleRuntimeconfigConfigIamMember;

GoogleRuntimeconfigConfigIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_runtimeconfig_config_iam_member.GoogleRuntimeconfigConfigIamMember;

GoogleRuntimeconfigConfigIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_runtimeconfig_config_iam_member.GoogleRuntimeconfigConfigIamMember;

GoogleRuntimeconfigConfigIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleRuntimeconfigConfigIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleRuntimeconfigConfigIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleRuntimeconfigConfigIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleRuntimeconfigConfigIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRuntimeconfigConfigIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference">GoogleRuntimeconfigConfigIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.configInput">configInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.config">config</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.condition"></a>

```java
public GoogleRuntimeconfigConfigIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference">GoogleRuntimeconfigConfigIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.conditionInput"></a>

```java
public GoogleRuntimeconfigConfigIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.configInput"></a>

```java
public java.lang.String getConfigInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRuntimeconfigConfigIamMemberCondition <a name="GoogleRuntimeconfigConfigIamMemberCondition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_runtimeconfig_config_iam_member.GoogleRuntimeconfigConfigIamMemberCondition;

GoogleRuntimeconfigConfigIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#expression GoogleRuntimeconfigConfigIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#title GoogleRuntimeconfigConfigIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#description GoogleRuntimeconfigConfigIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#expression GoogleRuntimeconfigConfigIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#title GoogleRuntimeconfigConfigIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#description GoogleRuntimeconfigConfigIamMember#description}.

---

### GoogleRuntimeconfigConfigIamMemberConfig <a name="GoogleRuntimeconfigConfigIamMemberConfig" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_runtimeconfig_config_iam_member.GoogleRuntimeconfigConfigIamMemberConfig;

GoogleRuntimeconfigConfigIamMemberConfig.builder()
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
    .config(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleRuntimeconfigConfigIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.config">config</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#config GoogleRuntimeconfigConfigIamMember#config}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#member GoogleRuntimeconfigConfigIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#role GoogleRuntimeconfigConfigIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#id GoogleRuntimeconfigConfigIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#project GoogleRuntimeconfigConfigIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#config GoogleRuntimeconfigConfigIamMember#config}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#member GoogleRuntimeconfigConfigIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#role GoogleRuntimeconfigConfigIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.condition"></a>

```java
public GoogleRuntimeconfigConfigIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#condition GoogleRuntimeconfigConfigIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#id GoogleRuntimeconfigConfigIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_runtimeconfig_config_iam_member#project GoogleRuntimeconfigConfigIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRuntimeconfigConfigIamMemberConditionOutputReference <a name="GoogleRuntimeconfigConfigIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_runtimeconfig_config_iam_member.GoogleRuntimeconfigConfigIamMemberConditionOutputReference;

new GoogleRuntimeconfigConfigIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleRuntimeconfigConfigIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRuntimeconfigConfigIamMember.GoogleRuntimeconfigConfigIamMemberCondition">GoogleRuntimeconfigConfigIamMemberCondition</a>

---



