# `googleSecretManagerRegionalSecretIamBinding` Submodule <a name="`googleSecretManagerRegionalSecretIamBinding` Submodule" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecretIamBinding <a name="GoogleSecretManagerRegionalSecretIamBinding" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding google_secret_manager_regional_secret_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secret_manager_regional_secret_iam_binding.GoogleSecretManagerRegionalSecretIamBinding;

GoogleSecretManagerRegionalSecretIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .secretId(java.lang.String)
//  .condition(GoogleSecretManagerRegionalSecretIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#members GoogleSecretManagerRegionalSecretIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#role GoogleSecretManagerRegionalSecretIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#secret_id GoogleSecretManagerRegionalSecretIamBinding#secret_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#id GoogleSecretManagerRegionalSecretIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#location GoogleSecretManagerRegionalSecretIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#project GoogleSecretManagerRegionalSecretIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#members GoogleSecretManagerRegionalSecretIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#role GoogleSecretManagerRegionalSecretIamBinding#role}.

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#secret_id GoogleSecretManagerRegionalSecretIamBinding#secret_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#condition GoogleSecretManagerRegionalSecretIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#id GoogleSecretManagerRegionalSecretIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#location GoogleSecretManagerRegionalSecretIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#project GoogleSecretManagerRegionalSecretIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.putCondition"></a>

```java
public void putCondition(GoogleSecretManagerRegionalSecretIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecretManagerRegionalSecretIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secret_manager_regional_secret_iam_binding.GoogleSecretManagerRegionalSecretIamBinding;

GoogleSecretManagerRegionalSecretIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secret_manager_regional_secret_iam_binding.GoogleSecretManagerRegionalSecretIamBinding;

GoogleSecretManagerRegionalSecretIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secret_manager_regional_secret_iam_binding.GoogleSecretManagerRegionalSecretIamBinding;

GoogleSecretManagerRegionalSecretIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secret_manager_regional_secret_iam_binding.GoogleSecretManagerRegionalSecretIamBinding;

GoogleSecretManagerRegionalSecretIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSecretManagerRegionalSecretIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSecretManagerRegionalSecretIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSecretManagerRegionalSecretIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSecretManagerRegionalSecretIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecretIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference">GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.condition"></a>

```java
public GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference">GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.conditionInput"></a>

```java
public GoogleSecretManagerRegionalSecretIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretIamBindingCondition <a name="GoogleSecretManagerRegionalSecretIamBindingCondition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secret_manager_regional_secret_iam_binding.GoogleSecretManagerRegionalSecretIamBindingCondition;

GoogleSecretManagerRegionalSecretIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#expression GoogleSecretManagerRegionalSecretIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#title GoogleSecretManagerRegionalSecretIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#description GoogleSecretManagerRegionalSecretIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#expression GoogleSecretManagerRegionalSecretIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#title GoogleSecretManagerRegionalSecretIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#description GoogleSecretManagerRegionalSecretIamBinding#description}.

---

### GoogleSecretManagerRegionalSecretIamBindingConfig <a name="GoogleSecretManagerRegionalSecretIamBindingConfig" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secret_manager_regional_secret_iam_binding.GoogleSecretManagerRegionalSecretIamBindingConfig;

GoogleSecretManagerRegionalSecretIamBindingConfig.builder()
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
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
    .secretId(java.lang.String)
//  .condition(GoogleSecretManagerRegionalSecretIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#members GoogleSecretManagerRegionalSecretIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#role GoogleSecretManagerRegionalSecretIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#secret_id GoogleSecretManagerRegionalSecretIamBinding#secret_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#id GoogleSecretManagerRegionalSecretIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#location GoogleSecretManagerRegionalSecretIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#project GoogleSecretManagerRegionalSecretIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#members GoogleSecretManagerRegionalSecretIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#role GoogleSecretManagerRegionalSecretIamBinding#role}.

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#secret_id GoogleSecretManagerRegionalSecretIamBinding#secret_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.condition"></a>

```java
public GoogleSecretManagerRegionalSecretIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#condition GoogleSecretManagerRegionalSecretIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#id GoogleSecretManagerRegionalSecretIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#location GoogleSecretManagerRegionalSecretIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_secret_manager_regional_secret_iam_binding#project GoogleSecretManagerRegionalSecretIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference <a name="GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_secret_manager_regional_secret_iam_binding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference;

new GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingConditionOutputReference.property.internalValue"></a>

```java
public GoogleSecretManagerRegionalSecretIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecretIamBinding.GoogleSecretManagerRegionalSecretIamBindingCondition">GoogleSecretManagerRegionalSecretIamBindingCondition</a>

---



