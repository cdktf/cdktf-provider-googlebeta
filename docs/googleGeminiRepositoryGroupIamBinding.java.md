# `googleGeminiRepositoryGroupIamBinding` Submodule <a name="`googleGeminiRepositoryGroupIamBinding` Submodule" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiRepositoryGroupIamBinding <a name="GoogleGeminiRepositoryGroupIamBinding" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding google_gemini_repository_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_repository_group_iam_binding.GoogleGeminiRepositoryGroupIamBinding;

GoogleGeminiRepositoryGroupIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .codeRepositoryIndex(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .repositoryGroupId(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleGeminiRepositoryGroupIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#code_repository_index GoogleGeminiRepositoryGroupIamBinding#code_repository_index}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#members GoogleGeminiRepositoryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.repositoryGroupId">repositoryGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#repository_group_id GoogleGeminiRepositoryGroupIamBinding#repository_group_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#role GoogleGeminiRepositoryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#id GoogleGeminiRepositoryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#location GoogleGeminiRepositoryGroupIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#project GoogleGeminiRepositoryGroupIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.codeRepositoryIndex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#code_repository_index GoogleGeminiRepositoryGroupIamBinding#code_repository_index}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#members GoogleGeminiRepositoryGroupIamBinding#members}.

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.repositoryGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#repository_group_id GoogleGeminiRepositoryGroupIamBinding#repository_group_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#role GoogleGeminiRepositoryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#condition GoogleGeminiRepositoryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#id GoogleGeminiRepositoryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#location GoogleGeminiRepositoryGroupIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#project GoogleGeminiRepositoryGroupIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.putCondition"></a>

```java
public void putCondition(GoogleGeminiRepositoryGroupIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiRepositoryGroupIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_repository_group_iam_binding.GoogleGeminiRepositoryGroupIamBinding;

GoogleGeminiRepositoryGroupIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_repository_group_iam_binding.GoogleGeminiRepositoryGroupIamBinding;

GoogleGeminiRepositoryGroupIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_repository_group_iam_binding.GoogleGeminiRepositoryGroupIamBinding;

GoogleGeminiRepositoryGroupIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_repository_group_iam_binding.GoogleGeminiRepositoryGroupIamBinding;

GoogleGeminiRepositoryGroupIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGeminiRepositoryGroupIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGeminiRepositoryGroupIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGeminiRepositoryGroupIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGeminiRepositoryGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiRepositoryGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference">GoogleGeminiRepositoryGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.codeRepositoryIndexInput">codeRepositoryIndexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.repositoryGroupIdInput">repositoryGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.repositoryGroupId">repositoryGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.condition"></a>

```java
public GoogleGeminiRepositoryGroupIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference">GoogleGeminiRepositoryGroupIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `codeRepositoryIndexInput`<sup>Optional</sup> <a name="codeRepositoryIndexInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.codeRepositoryIndexInput"></a>

```java
public java.lang.String getCodeRepositoryIndexInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.conditionInput"></a>

```java
public GoogleGeminiRepositoryGroupIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryGroupIdInput`<sup>Optional</sup> <a name="repositoryGroupIdInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.repositoryGroupIdInput"></a>

```java
public java.lang.String getRepositoryGroupIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.codeRepositoryIndex"></a>

```java
public java.lang.String getCodeRepositoryIndex();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.repositoryGroupId"></a>

```java
public java.lang.String getRepositoryGroupId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiRepositoryGroupIamBindingCondition <a name="GoogleGeminiRepositoryGroupIamBindingCondition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_repository_group_iam_binding.GoogleGeminiRepositoryGroupIamBindingCondition;

GoogleGeminiRepositoryGroupIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#expression GoogleGeminiRepositoryGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#title GoogleGeminiRepositoryGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#description GoogleGeminiRepositoryGroupIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#expression GoogleGeminiRepositoryGroupIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#title GoogleGeminiRepositoryGroupIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#description GoogleGeminiRepositoryGroupIamBinding#description}.

---

### GoogleGeminiRepositoryGroupIamBindingConfig <a name="GoogleGeminiRepositoryGroupIamBindingConfig" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_repository_group_iam_binding.GoogleGeminiRepositoryGroupIamBindingConfig;

GoogleGeminiRepositoryGroupIamBindingConfig.builder()
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
    .codeRepositoryIndex(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .repositoryGroupId(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleGeminiRepositoryGroupIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#code_repository_index GoogleGeminiRepositoryGroupIamBinding#code_repository_index}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#members GoogleGeminiRepositoryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.repositoryGroupId">repositoryGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#repository_group_id GoogleGeminiRepositoryGroupIamBinding#repository_group_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#role GoogleGeminiRepositoryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#id GoogleGeminiRepositoryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#location GoogleGeminiRepositoryGroupIamBinding#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#project GoogleGeminiRepositoryGroupIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.codeRepositoryIndex"></a>

```java
public java.lang.String getCodeRepositoryIndex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#code_repository_index GoogleGeminiRepositoryGroupIamBinding#code_repository_index}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#members GoogleGeminiRepositoryGroupIamBinding#members}.

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.repositoryGroupId"></a>

```java
public java.lang.String getRepositoryGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#repository_group_id GoogleGeminiRepositoryGroupIamBinding#repository_group_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#role GoogleGeminiRepositoryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.condition"></a>

```java
public GoogleGeminiRepositoryGroupIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#condition GoogleGeminiRepositoryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#id GoogleGeminiRepositoryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#location GoogleGeminiRepositoryGroupIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_gemini_repository_group_iam_binding#project GoogleGeminiRepositoryGroupIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiRepositoryGroupIamBindingConditionOutputReference <a name="GoogleGeminiRepositoryGroupIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_repository_group_iam_binding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference;

new GoogleGeminiRepositoryGroupIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingConditionOutputReference.property.internalValue"></a>

```java
public GoogleGeminiRepositoryGroupIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroupIamBinding.GoogleGeminiRepositoryGroupIamBindingCondition">GoogleGeminiRepositoryGroupIamBindingCondition</a>

---



