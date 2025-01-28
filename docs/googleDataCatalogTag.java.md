# `googleDataCatalogTag` Submodule <a name="`googleDataCatalogTag` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogTag <a name="GoogleDataCatalogTag" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag google_data_catalog_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTag;

GoogleDataCatalogTag.Builder.create(Construct scope, java.lang.String id)
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
    .fields(IResolvable)
    .fields(java.util.List<GoogleDataCatalogTagFields>)
    .template(java.lang.String)
//  .column(java.lang.String)
//  .id(java.lang.String)
//  .parent(java.lang.String)
//  .timeouts(GoogleDataCatalogTagTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.fields">fields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>></code> | fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.template">template</a></code> | <code>java.lang.String</code> | The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.column">column</a></code> | <code>java.lang.String</code> | Resources like Entry can have schemas associated with them. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this tag is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.fields"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>>

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#fields GoogleDataCatalogTag#fields}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.template"></a>

- *Type:* java.lang.String

The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#template GoogleDataCatalogTag#template}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.column"></a>

- *Type:* java.lang.String

Resources like Entry can have schemas associated with them.

This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#column GoogleDataCatalogTag#column}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the parent this tag is attached to.

This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#parent GoogleDataCatalogTag#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#timeouts GoogleDataCatalogTag#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields"></a>

```java
public void putFields(IResolvable OR java.util.List<GoogleDataCatalogTagFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataCatalogTagTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetColumn"></a>

```java
public void resetColumn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetId"></a>

```java
public void resetId()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetParent"></a>

```java
public void resetParent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataCatalogTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTag;

GoogleDataCatalogTag.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTag;

GoogleDataCatalogTag.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTag;

GoogleDataCatalogTag.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTag;

GoogleDataCatalogTag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataCatalogTag.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataCatalogTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataCatalogTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataCatalogTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataCatalogTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList">GoogleDataCatalogTagFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateDisplayname">templateDisplayname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference">GoogleDataCatalogTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.columnInput">columnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fieldsInput">fieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.column">column</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fields"></a>

```java
public GoogleDataCatalogTagFieldsList getFields();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList">GoogleDataCatalogTagFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `templateDisplayname`<sup>Required</sup> <a name="templateDisplayname" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateDisplayname"></a>

```java
public java.lang.String getTemplateDisplayname();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeouts"></a>

```java
public GoogleDataCatalogTagTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference">GoogleDataCatalogTagTimeoutsOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.columnInput"></a>

```java
public java.lang.String getColumnInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.fieldsInput"></a>

```java
public java.lang.Object getFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTag.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogTagConfig <a name="GoogleDataCatalogTagConfig" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTagConfig;

GoogleDataCatalogTagConfig.builder()
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
    .fields(IResolvable)
    .fields(java.util.List<GoogleDataCatalogTagFields>)
    .template(java.lang.String)
//  .column(java.lang.String)
//  .id(java.lang.String)
//  .parent(java.lang.String)
//  .timeouts(GoogleDataCatalogTagTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.fields">fields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>></code> | fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.template">template</a></code> | <code>java.lang.String</code> | The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.column">column</a></code> | <code>java.lang.String</code> | Resources like Entry can have schemas associated with them. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this tag is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.fields"></a>

```java
public java.lang.Object getFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>>

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#fields GoogleDataCatalogTag#fields}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#template GoogleDataCatalogTag#template}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

Resources like Entry can have schemas associated with them.

This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#column GoogleDataCatalogTag#column}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#id GoogleDataCatalogTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the parent this tag is attached to.

This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#parent GoogleDataCatalogTag#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagConfig.property.timeouts"></a>

```java
public GoogleDataCatalogTagTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#timeouts GoogleDataCatalogTag#timeouts}

---

### GoogleDataCatalogTagFields <a name="GoogleDataCatalogTagFields" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTagFields;

GoogleDataCatalogTagFields.builder()
    .fieldName(java.lang.String)
//  .boolValue(java.lang.Boolean)
//  .boolValue(IResolvable)
//  .doubleValue(java.lang.Number)
//  .enumValue(java.lang.String)
//  .stringValue(java.lang.String)
//  .timestampValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#field_name GoogleDataCatalogTag#field_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Holds the value for a tag field with boolean type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | Holds the value for a tag field with double type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.enumValue">enumValue</a></code> | <code>java.lang.String</code> | The display name of the enum value. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | Holds the value for a tag field with string type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.timestampValue">timestampValue</a></code> | <code>java.lang.String</code> | Holds the value for a tag field with timestamp type. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#field_name GoogleDataCatalogTag#field_name}.

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.boolValue"></a>

```java
public java.lang.Object getBoolValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Holds the value for a tag field with boolean type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#bool_value GoogleDataCatalogTag#bool_value}

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

Holds the value for a tag field with double type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#double_value GoogleDataCatalogTag#double_value}

---

##### `enumValue`<sup>Optional</sup> <a name="enumValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.enumValue"></a>

```java
public java.lang.String getEnumValue();
```

- *Type:* java.lang.String

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#enum_value GoogleDataCatalogTag#enum_value}

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

Holds the value for a tag field with string type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#string_value GoogleDataCatalogTag#string_value}

---

##### `timestampValue`<sup>Optional</sup> <a name="timestampValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields.property.timestampValue"></a>

```java
public java.lang.String getTimestampValue();
```

- *Type:* java.lang.String

Holds the value for a tag field with timestamp type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#timestamp_value GoogleDataCatalogTag#timestamp_value}

---

### GoogleDataCatalogTagTimeouts <a name="GoogleDataCatalogTagTimeouts" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTagTimeouts;

GoogleDataCatalogTagTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#create GoogleDataCatalogTag#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#delete GoogleDataCatalogTag#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#update GoogleDataCatalogTag#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#create GoogleDataCatalogTag#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#delete GoogleDataCatalogTag#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_data_catalog_tag#update GoogleDataCatalogTag#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataCatalogTagFieldsList <a name="GoogleDataCatalogTagFieldsList" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTagFieldsList;

new GoogleDataCatalogTagFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get"></a>

```java
public GoogleDataCatalogTagFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>>

---


### GoogleDataCatalogTagFieldsOutputReference <a name="GoogleDataCatalogTagFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTagFieldsOutputReference;

new GoogleDataCatalogTagFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetEnumValue">resetEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetTimestampValue">resetTimestampValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetDoubleValue"></a>

```java
public void resetDoubleValue()
```

##### `resetEnumValue` <a name="resetEnumValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetEnumValue"></a>

```java
public void resetEnumValue()
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```

##### `resetTimestampValue` <a name="resetTimestampValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.resetTimestampValue"></a>

```java
public void resetTimestampValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValueInput">enumValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValueInput">timestampValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValue">doubleValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValue">enumValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValue">timestampValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValueInput"></a>

```java
public java.lang.Object getBoolValueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValueInput"></a>

```java
public java.lang.Number getDoubleValueInput();
```

- *Type:* java.lang.Number

---

##### `enumValueInput`<sup>Optional</sup> <a name="enumValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValueInput"></a>

```java
public java.lang.String getEnumValueInput();
```

- *Type:* java.lang.String

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `timestampValueInput`<sup>Optional</sup> <a name="timestampValueInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValueInput"></a>

```java
public java.lang.String getTimestampValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.boolValue"></a>

```java
public java.lang.Object getBoolValue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.doubleValue"></a>

```java
public java.lang.Number getDoubleValue();
```

- *Type:* java.lang.Number

---

##### `enumValue`<sup>Required</sup> <a name="enumValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.enumValue"></a>

```java
public java.lang.String getEnumValue();
```

- *Type:* java.lang.String

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `timestampValue`<sup>Required</sup> <a name="timestampValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.timestampValue"></a>

```java
public java.lang.String getTimestampValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagFields">GoogleDataCatalogTagFields</a>

---


### GoogleDataCatalogTagTimeoutsOutputReference <a name="GoogleDataCatalogTagTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_data_catalog_tag.GoogleDataCatalogTagTimeoutsOutputReference;

new GoogleDataCatalogTagTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataCatalogTag.GoogleDataCatalogTagTimeouts">GoogleDataCatalogTagTimeouts</a>

---



