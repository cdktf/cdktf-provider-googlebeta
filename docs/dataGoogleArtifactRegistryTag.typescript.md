# `dataGoogleArtifactRegistryTag` Submodule <a name="`dataGoogleArtifactRegistryTag` Submodule" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryTag <a name="DataGoogleArtifactRegistryTag" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag google_artifact_registry_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryTag } from '@cdktf/provider-google-beta'

new dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag(scope: Construct, id: string, config: DataGoogleArtifactRegistryTagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig">DataGoogleArtifactRegistryTagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig">DataGoogleArtifactRegistryTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryTag resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isConstruct"></a>

```typescript
import { dataGoogleArtifactRegistryTag } from '@cdktf/provider-google-beta'

dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformElement"></a>

```typescript
import { dataGoogleArtifactRegistryTag } from '@cdktf/provider-google-beta'

dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformDataSource"></a>

```typescript
import { dataGoogleArtifactRegistryTag } from '@cdktf/provider-google-beta'

dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport"></a>

```typescript
import { dataGoogleArtifactRegistryTag } from '@cdktf/provider-google-beta'

dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryTag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.packageNameInput">packageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tagNameInput">tagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.packageNameInput"></a>

```typescript
public readonly packageNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tagNameInput"></a>

```typescript
public readonly tagNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryTagConfig <a name="DataGoogleArtifactRegistryTagConfig" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryTag } from '@cdktf/provider-google-beta'

const dataGoogleArtifactRegistryTagConfig: dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#location DataGoogleArtifactRegistryTag#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.packageName">packageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#package_name DataGoogleArtifactRegistryTag#package_name}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#repository_id DataGoogleArtifactRegistryTag#repository_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.tagName">tagName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#tag_name DataGoogleArtifactRegistryTag#tag_name}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#id DataGoogleArtifactRegistryTag#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#project DataGoogleArtifactRegistryTag#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#location DataGoogleArtifactRegistryTag#location}.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#package_name DataGoogleArtifactRegistryTag#package_name}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#repository_id DataGoogleArtifactRegistryTag#repository_id}.

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#tag_name DataGoogleArtifactRegistryTag#tag_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#id DataGoogleArtifactRegistryTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryTag.DataGoogleArtifactRegistryTagConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/data-sources/google_artifact_registry_tag#project DataGoogleArtifactRegistryTag#project}.

---



