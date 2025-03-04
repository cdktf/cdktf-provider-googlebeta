# `googleDataplexAspectTypeIamMember` Submodule <a name="`googleDataplexAspectTypeIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexAspectTypeIamMember <a name="GoogleDataplexAspectTypeIamMember" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member google_dataplex_aspect_type_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_aspect_type_iam_member.GoogleDataplexAspectTypeIamMember;

GoogleDataplexAspectTypeIamMember.Builder.create(Construct scope, java.lang.String id)
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
    .aspectTypeId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleDataplexAspectTypeIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.aspectTypeId">aspectTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#aspect_type_id GoogleDataplexAspectTypeIamMember#aspect_type_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#member GoogleDataplexAspectTypeIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#role GoogleDataplexAspectTypeIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#id GoogleDataplexAspectTypeIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#location GoogleDataplexAspectTypeIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#project GoogleDataplexAspectTypeIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aspectTypeId`<sup>Required</sup> <a name="aspectTypeId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.aspectTypeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#aspect_type_id GoogleDataplexAspectTypeIamMember#aspect_type_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#member GoogleDataplexAspectTypeIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#role GoogleDataplexAspectTypeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#condition GoogleDataplexAspectTypeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#id GoogleDataplexAspectTypeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#location GoogleDataplexAspectTypeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#project GoogleDataplexAspectTypeIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.putCondition"></a>

```java
public void putCondition(GoogleDataplexAspectTypeIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexAspectTypeIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_aspect_type_iam_member.GoogleDataplexAspectTypeIamMember;

GoogleDataplexAspectTypeIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_aspect_type_iam_member.GoogleDataplexAspectTypeIamMember;

GoogleDataplexAspectTypeIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_aspect_type_iam_member.GoogleDataplexAspectTypeIamMember;

GoogleDataplexAspectTypeIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_aspect_type_iam_member.GoogleDataplexAspectTypeIamMember;

GoogleDataplexAspectTypeIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataplexAspectTypeIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataplexAspectTypeIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataplexAspectTypeIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataplexAspectTypeIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexAspectTypeIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference">GoogleDataplexAspectTypeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.aspectTypeIdInput">aspectTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.aspectTypeId">aspectTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.condition"></a>

```java
public GoogleDataplexAspectTypeIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference">GoogleDataplexAspectTypeIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `aspectTypeIdInput`<sup>Optional</sup> <a name="aspectTypeIdInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.aspectTypeIdInput"></a>

```java
public java.lang.String getAspectTypeIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.conditionInput"></a>

```java
public GoogleDataplexAspectTypeIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `aspectTypeId`<sup>Required</sup> <a name="aspectTypeId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.aspectTypeId"></a>

```java
public java.lang.String getAspectTypeId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexAspectTypeIamMemberCondition <a name="GoogleDataplexAspectTypeIamMemberCondition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_aspect_type_iam_member.GoogleDataplexAspectTypeIamMemberCondition;

GoogleDataplexAspectTypeIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#expression GoogleDataplexAspectTypeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#title GoogleDataplexAspectTypeIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#description GoogleDataplexAspectTypeIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#expression GoogleDataplexAspectTypeIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#title GoogleDataplexAspectTypeIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#description GoogleDataplexAspectTypeIamMember#description}.

---

### GoogleDataplexAspectTypeIamMemberConfig <a name="GoogleDataplexAspectTypeIamMemberConfig" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_aspect_type_iam_member.GoogleDataplexAspectTypeIamMemberConfig;

GoogleDataplexAspectTypeIamMemberConfig.builder()
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
    .aspectTypeId(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleDataplexAspectTypeIamMemberCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.aspectTypeId">aspectTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#aspect_type_id GoogleDataplexAspectTypeIamMember#aspect_type_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#member GoogleDataplexAspectTypeIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#role GoogleDataplexAspectTypeIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#id GoogleDataplexAspectTypeIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#location GoogleDataplexAspectTypeIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#project GoogleDataplexAspectTypeIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aspectTypeId`<sup>Required</sup> <a name="aspectTypeId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.aspectTypeId"></a>

```java
public java.lang.String getAspectTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#aspect_type_id GoogleDataplexAspectTypeIamMember#aspect_type_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#member GoogleDataplexAspectTypeIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#role GoogleDataplexAspectTypeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.condition"></a>

```java
public GoogleDataplexAspectTypeIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#condition GoogleDataplexAspectTypeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#id GoogleDataplexAspectTypeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#location GoogleDataplexAspectTypeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#project GoogleDataplexAspectTypeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexAspectTypeIamMemberConditionOutputReference <a name="GoogleDataplexAspectTypeIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_aspect_type_iam_member.GoogleDataplexAspectTypeIamMemberConditionOutputReference;

new GoogleDataplexAspectTypeIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleDataplexAspectTypeIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

---



