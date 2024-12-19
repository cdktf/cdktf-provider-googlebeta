# `googleSourcerepoRepository` Submodule <a name="`googleSourcerepoRepository` Submodule" id="@cdktf/provider-google-beta.googleSourcerepoRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSourcerepoRepository <a name="GoogleSourcerepoRepository" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository google_sourcerepo_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepository;

GoogleSourcerepoRepository.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .createIgnoreAlreadyExists(java.lang.Boolean)
//  .createIgnoreAlreadyExists(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .pubsubConfigs(IResolvable)
//  .pubsubConfigs(java.util.List<GoogleSourcerepoRepositoryPubsubConfigs>)
//  .timeouts(GoogleSourcerepoRepositoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, skip repository creation if a repository with the same name already exists. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#id GoogleSourcerepoRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#project GoogleSourcerepoRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.pubsubConfigs">pubsubConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>></code> | pubsub_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#name GoogleSourcerepoRepository#name}

---

##### `createIgnoreAlreadyExists`<sup>Optional</sup> <a name="createIgnoreAlreadyExists" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.createIgnoreAlreadyExists"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, skip repository creation if a repository with the same name already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#create_ignore_already_exists GoogleSourcerepoRepository#create_ignore_already_exists}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#id GoogleSourcerepoRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#project GoogleSourcerepoRepository#project}.

---

##### `pubsubConfigs`<sup>Optional</sup> <a name="pubsubConfigs" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.pubsubConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>>

pubsub_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#pubsub_configs GoogleSourcerepoRepository#pubsub_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#timeouts GoogleSourcerepoRepository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs">putPubsubConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetCreateIgnoreAlreadyExists">resetCreateIgnoreAlreadyExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetPubsubConfigs">resetPubsubConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPubsubConfigs` <a name="putPubsubConfigs" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs"></a>

```java
public void putPubsubConfigs(IResolvable OR java.util.List<GoogleSourcerepoRepositoryPubsubConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts"></a>

```java
public void putTimeouts(GoogleSourcerepoRepositoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

---

##### `resetCreateIgnoreAlreadyExists` <a name="resetCreateIgnoreAlreadyExists" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetCreateIgnoreAlreadyExists"></a>

```java
public void resetCreateIgnoreAlreadyExists()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetProject"></a>

```java
public void resetProject()
```

##### `resetPubsubConfigs` <a name="resetPubsubConfigs" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetPubsubConfigs"></a>

```java
public void resetPubsubConfigs()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSourcerepoRepository resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepository;

GoogleSourcerepoRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepository;

GoogleSourcerepoRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepository;

GoogleSourcerepoRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepository;

GoogleSourcerepoRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSourcerepoRepository.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSourcerepoRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSourcerepoRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSourcerepoRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSourcerepoRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigs">pubsubConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList">GoogleSourcerepoRepositoryPubsubConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference">GoogleSourcerepoRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExistsInput">createIgnoreAlreadyExistsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigsInput">pubsubConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pubsubConfigs`<sup>Required</sup> <a name="pubsubConfigs" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigs"></a>

```java
public GoogleSourcerepoRepositoryPubsubConfigsList getPubsubConfigs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList">GoogleSourcerepoRepositoryPubsubConfigsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeouts"></a>

```java
public GoogleSourcerepoRepositoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference">GoogleSourcerepoRepositoryTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `createIgnoreAlreadyExistsInput`<sup>Optional</sup> <a name="createIgnoreAlreadyExistsInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExistsInput"></a>

```java
public java.lang.Object getCreateIgnoreAlreadyExistsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pubsubConfigsInput`<sup>Optional</sup> <a name="pubsubConfigsInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigsInput"></a>

```java
public java.lang.Object getPubsubConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

---

##### `createIgnoreAlreadyExists`<sup>Required</sup> <a name="createIgnoreAlreadyExists" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExists"></a>

```java
public java.lang.Object getCreateIgnoreAlreadyExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSourcerepoRepositoryConfig <a name="GoogleSourcerepoRepositoryConfig" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepositoryConfig;

GoogleSourcerepoRepositoryConfig.builder()
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
    .name(java.lang.String)
//  .createIgnoreAlreadyExists(java.lang.Boolean)
//  .createIgnoreAlreadyExists(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .pubsubConfigs(IResolvable)
//  .pubsubConfigs(java.util.List<GoogleSourcerepoRepositoryPubsubConfigs>)
//  .timeouts(GoogleSourcerepoRepositoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, skip repository creation if a repository with the same name already exists. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#id GoogleSourcerepoRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#project GoogleSourcerepoRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.pubsubConfigs">pubsubConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>></code> | pubsub_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#name GoogleSourcerepoRepository#name}

---

##### `createIgnoreAlreadyExists`<sup>Optional</sup> <a name="createIgnoreAlreadyExists" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.createIgnoreAlreadyExists"></a>

```java
public java.lang.Object getCreateIgnoreAlreadyExists();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, skip repository creation if a repository with the same name already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#create_ignore_already_exists GoogleSourcerepoRepository#create_ignore_already_exists}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#id GoogleSourcerepoRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#project GoogleSourcerepoRepository#project}.

---

##### `pubsubConfigs`<sup>Optional</sup> <a name="pubsubConfigs" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.pubsubConfigs"></a>

```java
public java.lang.Object getPubsubConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>>

pubsub_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#pubsub_configs GoogleSourcerepoRepository#pubsub_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.timeouts"></a>

```java
public GoogleSourcerepoRepositoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#timeouts GoogleSourcerepoRepository#timeouts}

---

### GoogleSourcerepoRepositoryPubsubConfigs <a name="GoogleSourcerepoRepositoryPubsubConfigs" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepositoryPubsubConfigs;

GoogleSourcerepoRepositoryPubsubConfigs.builder()
    .messageFormat(java.lang.String)
    .topic(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | The format of the Cloud Pub/Sub messages. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.topic">topic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#topic GoogleSourcerepoRepository#topic}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Email address of the service account used for publishing Cloud Pub/Sub messages. |

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

The format of the Cloud Pub/Sub messages.

* PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
* JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#message_format GoogleSourcerepoRepository#message_format}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#topic GoogleSourcerepoRepository#topic}.

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Email address of the service account used for publishing Cloud Pub/Sub messages.

This service account needs to be in the same project as the PubsubConfig. When added,
the caller needs to have iam.serviceAccounts.actAs permission on this service account.
If unspecified, it defaults to the compute engine default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#service_account_email GoogleSourcerepoRepository#service_account_email}

---

### GoogleSourcerepoRepositoryTimeouts <a name="GoogleSourcerepoRepositoryTimeouts" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepositoryTimeouts;

GoogleSourcerepoRepositoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#create GoogleSourcerepoRepository#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#delete GoogleSourcerepoRepository#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#update GoogleSourcerepoRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#create GoogleSourcerepoRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#delete GoogleSourcerepoRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_sourcerepo_repository#update GoogleSourcerepoRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSourcerepoRepositoryPubsubConfigsList <a name="GoogleSourcerepoRepositoryPubsubConfigsList" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepositoryPubsubConfigsList;

new GoogleSourcerepoRepositoryPubsubConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get"></a>

```java
public GoogleSourcerepoRepositoryPubsubConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>>

---


### GoogleSourcerepoRepositoryPubsubConfigsOutputReference <a name="GoogleSourcerepoRepositoryPubsubConfigsOutputReference" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference;

new GoogleSourcerepoRepositoryPubsubConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat">messageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput"></a>

```java
public java.lang.String getMessageFormatInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat"></a>

```java
public java.lang.String getMessageFormat();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>

---


### GoogleSourcerepoRepositoryTimeoutsOutputReference <a name="GoogleSourcerepoRepositoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_sourcerepo_repository.GoogleSourcerepoRepositoryTimeoutsOutputReference;

new GoogleSourcerepoRepositoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

---



