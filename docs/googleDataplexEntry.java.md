# `googleDataplexEntry` Submodule <a name="`googleDataplexEntry` Submodule" id="@cdktf/provider-google-beta.googleDataplexEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexEntry <a name="GoogleDataplexEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry google_dataplex_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntry;

GoogleDataplexEntry.Builder.create(Construct scope, java.lang.String id)
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
    .entryType(java.lang.String)
//  .aspects(IResolvable)
//  .aspects(java.util.List<GoogleDataplexEntryAspects>)
//  .entryGroupId(java.lang.String)
//  .entryId(java.lang.String)
//  .entrySource(GoogleDataplexEntryEntrySource)
//  .fullyQualifiedName(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .parentEntry(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexEntryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryType">entryType</a></code> | <code>java.lang.String</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.aspects">aspects</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>></code> | aspects block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryId">entryId</a></code> | <code>java.lang.String</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entrySource">entrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.parentEntry">parentEntry</a></code> | <code>java.lang.String</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryType"></a>

- *Type:* java.lang.String

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#entry_type GoogleDataplexEntry#entry_type}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.aspects"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>>

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#aspects GoogleDataplexEntry#aspects}

---

##### `entryGroupId`<sup>Optional</sup> <a name="entryGroupId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryGroupId"></a>

- *Type:* java.lang.String

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#entry_group_id GoogleDataplexEntry#entry_group_id}

---

##### `entryId`<sup>Optional</sup> <a name="entryId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entryId"></a>

- *Type:* java.lang.String

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#entry_id GoogleDataplexEntry#entry_id}

---

##### `entrySource`<sup>Optional</sup> <a name="entrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.entrySource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#entry_source GoogleDataplexEntry#entry_source}

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.fullyQualifiedName"></a>

- *Type:* java.lang.String

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#fully_qualified_name GoogleDataplexEntry#fully_qualified_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#location GoogleDataplexEntry#location}

---

##### `parentEntry`<sup>Optional</sup> <a name="parentEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.parentEntry"></a>

- *Type:* java.lang.String

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#parent_entry GoogleDataplexEntry#parent_entry}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#timeouts GoogleDataplexEntry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putAspects">putAspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource">putEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetAspects">resetAspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryGroupId">resetEntryGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryId">resetEntryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntrySource">resetEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetFullyQualifiedName">resetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetParentEntry">resetParentEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAspects` <a name="putAspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putAspects"></a>

```java
public void putAspects(IResolvable OR java.util.List<GoogleDataplexEntryAspects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putAspects.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>>

---

##### `putEntrySource` <a name="putEntrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource"></a>

```java
public void putEntrySource(GoogleDataplexEntryEntrySource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataplexEntryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

---

##### `resetAspects` <a name="resetAspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetAspects"></a>

```java
public void resetAspects()
```

##### `resetEntryGroupId` <a name="resetEntryGroupId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryGroupId"></a>

```java
public void resetEntryGroupId()
```

##### `resetEntryId` <a name="resetEntryId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryId"></a>

```java
public void resetEntryId()
```

##### `resetEntrySource` <a name="resetEntrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntrySource"></a>

```java
public void resetEntrySource()
```

##### `resetFullyQualifiedName` <a name="resetFullyQualifiedName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetFullyQualifiedName"></a>

```java
public void resetFullyQualifiedName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetParentEntry` <a name="resetParentEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetParentEntry"></a>

```java
public void resetParentEntry()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntry;

GoogleDataplexEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntry;

GoogleDataplexEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntry;

GoogleDataplexEntry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntry;

GoogleDataplexEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataplexEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDataplexEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataplexEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataplexEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspects">aspects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList">GoogleDataplexEntryAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySource">entrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference">GoogleDataplexEntryEntrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference">GoogleDataplexEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspectsInput">aspectsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupIdInput">entryGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryIdInput">entryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySourceInput">entrySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryTypeInput">entryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedNameInput">fullyQualifiedNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntryInput">parentEntryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryId">entryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryType">entryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntry">parentEntry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aspects`<sup>Required</sup> <a name="aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspects"></a>

```java
public GoogleDataplexEntryAspectsList getAspects();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList">GoogleDataplexEntryAspectsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `entrySource`<sup>Required</sup> <a name="entrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySource"></a>

```java
public GoogleDataplexEntryEntrySourceOutputReference getEntrySource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference">GoogleDataplexEntryEntrySourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeouts"></a>

```java
public GoogleDataplexEntryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference">GoogleDataplexEntryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `aspectsInput`<sup>Optional</sup> <a name="aspectsInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspectsInput"></a>

```java
public java.lang.Object getAspectsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>>

---

##### `entryGroupIdInput`<sup>Optional</sup> <a name="entryGroupIdInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupIdInput"></a>

```java
public java.lang.String getEntryGroupIdInput();
```

- *Type:* java.lang.String

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryIdInput"></a>

```java
public java.lang.String getEntryIdInput();
```

- *Type:* java.lang.String

---

##### `entrySourceInput`<sup>Optional</sup> <a name="entrySourceInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySourceInput"></a>

```java
public GoogleDataplexEntryEntrySource getEntrySourceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

---

##### `entryTypeInput`<sup>Optional</sup> <a name="entryTypeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryTypeInput"></a>

```java
public java.lang.String getEntryTypeInput();
```

- *Type:* java.lang.String

---

##### `fullyQualifiedNameInput`<sup>Optional</sup> <a name="fullyQualifiedNameInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedNameInput"></a>

```java
public java.lang.String getFullyQualifiedNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentEntryInput`<sup>Optional</sup> <a name="parentEntryInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntryInput"></a>

```java
public java.lang.String getParentEntryInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupId"></a>

```java
public java.lang.String getEntryGroupId();
```

- *Type:* java.lang.String

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryType"></a>

```java
public java.lang.String getEntryType();
```

- *Type:* java.lang.String

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parentEntry`<sup>Required</sup> <a name="parentEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntry"></a>

```java
public java.lang.String getParentEntry();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexEntryAspects <a name="GoogleDataplexEntryAspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryAspects;

GoogleDataplexEntryAspects.builder()
    .aspect(GoogleDataplexEntryAspectsAspect)
    .aspectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspect">aspect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspectKey">aspectKey</a></code> | <code>java.lang.String</code> | Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:. |

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspect"></a>

```java
public GoogleDataplexEntryAspectsAspect getAspect();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#aspect GoogleDataplexEntry#aspect}

---

##### `aspectKey`<sup>Required</sup> <a name="aspectKey" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspectKey"></a>

```java
public java.lang.String getAspectKey();
```

- *Type:* java.lang.String

Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:.

If the aspect is attached directly to the entry: {project_number}.{locationId}.{aspectTypeId}
If the aspect is attached to an entry's path: {project_number}.{locationId}.{aspectTypeId}@{path}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#aspect_key GoogleDataplexEntry#aspect_key}

---

### GoogleDataplexEntryAspectsAspect <a name="GoogleDataplexEntryAspectsAspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryAspectsAspect;

GoogleDataplexEntryAspectsAspect.builder()
    .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.property.data">data</a></code> | <code>java.lang.String</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#data GoogleDataplexEntry#data}

---

### GoogleDataplexEntryConfig <a name="GoogleDataplexEntryConfig" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryConfig;

GoogleDataplexEntryConfig.builder()
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
    .entryType(java.lang.String)
//  .aspects(IResolvable)
//  .aspects(java.util.List<GoogleDataplexEntryAspects>)
//  .entryGroupId(java.lang.String)
//  .entryId(java.lang.String)
//  .entrySource(GoogleDataplexEntryEntrySource)
//  .fullyQualifiedName(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .parentEntry(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexEntryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryType">entryType</a></code> | <code>java.lang.String</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.aspects">aspects</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>></code> | aspects block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryId">entryId</a></code> | <code>java.lang.String</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entrySource">entrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.parentEntry">parentEntry</a></code> | <code>java.lang.String</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryType"></a>

```java
public java.lang.String getEntryType();
```

- *Type:* java.lang.String

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#entry_type GoogleDataplexEntry#entry_type}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.aspects"></a>

```java
public java.lang.Object getAspects();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>>

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#aspects GoogleDataplexEntry#aspects}

---

##### `entryGroupId`<sup>Optional</sup> <a name="entryGroupId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryGroupId"></a>

```java
public java.lang.String getEntryGroupId();
```

- *Type:* java.lang.String

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#entry_group_id GoogleDataplexEntry#entry_group_id}

---

##### `entryId`<sup>Optional</sup> <a name="entryId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#entry_id GoogleDataplexEntry#entry_id}

---

##### `entrySource`<sup>Optional</sup> <a name="entrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entrySource"></a>

```java
public GoogleDataplexEntryEntrySource getEntrySource();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#entry_source GoogleDataplexEntry#entry_source}

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#fully_qualified_name GoogleDataplexEntry#fully_qualified_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#location GoogleDataplexEntry#location}

---

##### `parentEntry`<sup>Optional</sup> <a name="parentEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.parentEntry"></a>

```java
public java.lang.String getParentEntry();
```

- *Type:* java.lang.String

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#parent_entry GoogleDataplexEntry#parent_entry}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.timeouts"></a>

```java
public GoogleDataplexEntryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#timeouts GoogleDataplexEntry#timeouts}

---

### GoogleDataplexEntryEntrySource <a name="GoogleDataplexEntryEntrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryEntrySource;

GoogleDataplexEntryEntrySource.builder()
//  .ancestors(IResolvable)
//  .ancestors(java.util.List<GoogleDataplexEntryEntrySourceAncestors>)
//  .createTime(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .platform(java.lang.String)
//  .resource(java.lang.String)
//  .systemAttribute(java.lang.String)
//  .updateTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.ancestors">ancestors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>></code> | ancestors block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.createTime">createTime</a></code> | <code>java.lang.String</code> | The time when the resource was created in the source system. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.description">description</a></code> | <code>java.lang.String</code> | A description of the data resource. Maximum length is 2,000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-friendly display name. Maximum length is 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.platform">platform</a></code> | <code>java.lang.String</code> | The platform containing the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.resource">resource</a></code> | <code>java.lang.String</code> | The name of the resource in the source system. Maximum length is 4,000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.systemAttribute">systemAttribute</a></code> | <code>java.lang.String</code> | The name of the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | The time when the resource was last updated in the source system. |

---

##### `ancestors`<sup>Optional</sup> <a name="ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.ancestors"></a>

```java
public java.lang.Object getAncestors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>>

ancestors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#ancestors GoogleDataplexEntry#ancestors}

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

The time when the resource was created in the source system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#create_time GoogleDataplexEntry#create_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the data resource. Maximum length is 2,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#description GoogleDataplexEntry#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-friendly display name. Maximum length is 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#display_name GoogleDataplexEntry#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

The maximum size of keys and values is 128 characters each.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#labels GoogleDataplexEntry#labels}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

The platform containing the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#platform GoogleDataplexEntry#platform}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

The name of the resource in the source system. Maximum length is 4,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#resource GoogleDataplexEntry#resource}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.systemAttribute"></a>

```java
public java.lang.String getSystemAttribute();
```

- *Type:* java.lang.String

The name of the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#system GoogleDataplexEntry#system}

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

The time when the resource was last updated in the source system.

If the entry exists in the system and its EntrySource has updateTime populated,
further updates to the EntrySource of the entry must provide incremental updates to its updateTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#update_time GoogleDataplexEntry#update_time}

---

### GoogleDataplexEntryEntrySourceAncestors <a name="GoogleDataplexEntryEntrySourceAncestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryEntrySourceAncestors;

GoogleDataplexEntryEntrySourceAncestors.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.name">name</a></code> | <code>java.lang.String</code> | The name of the ancestor resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.type">type</a></code> | <code>java.lang.String</code> | The type of the ancestor resource. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#name GoogleDataplexEntry#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#type GoogleDataplexEntry#type}

---

### GoogleDataplexEntryTimeouts <a name="GoogleDataplexEntryTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryTimeouts;

GoogleDataplexEntryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#create GoogleDataplexEntry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#delete GoogleDataplexEntry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#update GoogleDataplexEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#create GoogleDataplexEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#delete GoogleDataplexEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_dataplex_entry#update GoogleDataplexEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexEntryAspectsAspectOutputReference <a name="GoogleDataplexEntryAspectsAspectOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryAspectsAspectOutputReference;

new GoogleDataplexEntryAspectsAspectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.aspectType">aspectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspectType`<sup>Required</sup> <a name="aspectType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.aspectType"></a>

```java
public java.lang.String getAspectType();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.internalValue"></a>

```java
public GoogleDataplexEntryAspectsAspect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

---


### GoogleDataplexEntryAspectsList <a name="GoogleDataplexEntryAspectsList" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryAspectsList;

new GoogleDataplexEntryAspectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.get"></a>

```java
public GoogleDataplexEntryAspectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>>

---


### GoogleDataplexEntryAspectsOutputReference <a name="GoogleDataplexEntryAspectsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryAspectsOutputReference;

new GoogleDataplexEntryAspectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.putAspect">putAspect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAspect` <a name="putAspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.putAspect"></a>

```java
public void putAspect(GoogleDataplexEntryAspectsAspect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.putAspect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspect">aspect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference">GoogleDataplexEntryAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectInput">aspectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKeyInput">aspectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKey">aspectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspect"></a>

```java
public GoogleDataplexEntryAspectsAspectOutputReference getAspect();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference">GoogleDataplexEntryAspectsAspectOutputReference</a>

---

##### `aspectInput`<sup>Optional</sup> <a name="aspectInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectInput"></a>

```java
public GoogleDataplexEntryAspectsAspect getAspectInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

---

##### `aspectKeyInput`<sup>Optional</sup> <a name="aspectKeyInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKeyInput"></a>

```java
public java.lang.String getAspectKeyInput();
```

- *Type:* java.lang.String

---

##### `aspectKey`<sup>Required</sup> <a name="aspectKey" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKey"></a>

```java
public java.lang.String getAspectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>

---


### GoogleDataplexEntryEntrySourceAncestorsList <a name="GoogleDataplexEntryEntrySourceAncestorsList" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryEntrySourceAncestorsList;

new GoogleDataplexEntryEntrySourceAncestorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.get"></a>

```java
public GoogleDataplexEntryEntrySourceAncestorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>>

---


### GoogleDataplexEntryEntrySourceAncestorsOutputReference <a name="GoogleDataplexEntryEntrySourceAncestorsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryEntrySourceAncestorsOutputReference;

new GoogleDataplexEntryEntrySourceAncestorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>

---


### GoogleDataplexEntryEntrySourceOutputReference <a name="GoogleDataplexEntryEntrySourceOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryEntrySourceOutputReference;

new GoogleDataplexEntryEntrySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.putAncestors">putAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetAncestors">resetAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetResource">resetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetUpdateTime">resetUpdateTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAncestors` <a name="putAncestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.putAncestors"></a>

```java
public void putAncestors(IResolvable OR java.util.List<GoogleDataplexEntryEntrySourceAncestors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.putAncestors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>>

---

##### `resetAncestors` <a name="resetAncestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetAncestors"></a>

```java
public void resetAncestors()
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetCreateTime"></a>

```java
public void resetCreateTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetPlatform"></a>

```java
public void resetPlatform()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetResource"></a>

```java
public void resetResource()
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetSystemAttribute"></a>

```java
public void resetSystemAttribute()
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetUpdateTime"></a>

```java
public void resetUpdateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestors">ancestors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList">GoogleDataplexEntryEntrySourceAncestorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestorsInput">ancestorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTimeInput">createTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTimeInput">updateTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttribute">systemAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ancestors`<sup>Required</sup> <a name="ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestors"></a>

```java
public GoogleDataplexEntryEntrySourceAncestorsList getAncestors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList">GoogleDataplexEntryEntrySourceAncestorsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `ancestorsInput`<sup>Optional</sup> <a name="ancestorsInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestorsInput"></a>

```java
public java.lang.Object getAncestorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>>

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTimeInput"></a>

```java
public java.lang.String getCreateTimeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttributeInput"></a>

```java
public java.lang.String getSystemAttributeInput();
```

- *Type:* java.lang.String

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTimeInput"></a>

```java
public java.lang.String getUpdateTimeInput();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttribute"></a>

```java
public java.lang.String getSystemAttribute();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.internalValue"></a>

```java
public GoogleDataplexEntryEntrySource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

---


### GoogleDataplexEntryTimeoutsOutputReference <a name="GoogleDataplexEntryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dataplex_entry.GoogleDataplexEntryTimeoutsOutputReference;

new GoogleDataplexEntryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

---



