# `dataGoogleArtifactRegistryRepositories` Submodule <a name="`dataGoogleArtifactRegistryRepositories` Submodule" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryRepositories <a name="DataGoogleArtifactRegistryRepositories" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories google_artifact_registry_repositories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

new dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories(scope: Construct, id: string, config: DataGoogleArtifactRegistryRepositoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig">DataGoogleArtifactRegistryRepositoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig">DataGoogleArtifactRegistryRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetNameFilter">resetNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNameFilter` <a name="resetNameFilter" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetNameFilter"></a>

```typescript
public resetNameFilter(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isConstruct"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformElement"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformDataSource"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryRepositories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryRepositories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.repositories">repositories</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList">DataGoogleArtifactRegistryRepositoriesRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.nameFilterInput">nameFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.nameFilter">nameFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.repositories"></a>

```typescript
public readonly repositories: DataGoogleArtifactRegistryRepositoriesRepositoriesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList">DataGoogleArtifactRegistryRepositoriesRepositoriesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameFilterInput`<sup>Optional</sup> <a name="nameFilterInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.nameFilterInput"></a>

```typescript
public readonly nameFilterInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `nameFilter`<sup>Required</sup> <a name="nameFilter" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.nameFilter"></a>

```typescript
public readonly nameFilter: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryRepositoriesConfig <a name="DataGoogleArtifactRegistryRepositoriesConfig" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

const dataGoogleArtifactRegistryRepositoriesConfig: dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#location DataGoogleArtifactRegistryRepositories#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#id DataGoogleArtifactRegistryRepositories#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.nameFilter">nameFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#name_filter DataGoogleArtifactRegistryRepositories#name_filter}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#project DataGoogleArtifactRegistryRepositories#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#location DataGoogleArtifactRegistryRepositories#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#id DataGoogleArtifactRegistryRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameFilter`<sup>Optional</sup> <a name="nameFilter" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.nameFilter"></a>

```typescript
public readonly nameFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#name_filter DataGoogleArtifactRegistryRepositories#name_filter}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_artifact_registry_repositories#project DataGoogleArtifactRegistryRepositories#project}.

---

### DataGoogleArtifactRegistryRepositoriesRepositories <a name="DataGoogleArtifactRegistryRepositoriesRepositories" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

const dataGoogleArtifactRegistryRepositoriesRepositories: dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryRepositoriesRepositoriesList <a name="DataGoogleArtifactRegistryRepositoriesRepositoriesList" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

new dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.get"></a>

```typescript
public get(index: number): DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference <a name="DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryRepositories } from '@cdktf/provider-google-beta'

new dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories">DataGoogleArtifactRegistryRepositoriesRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleArtifactRegistryRepositoriesRepositories;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryRepositories.DataGoogleArtifactRegistryRepositoriesRepositories">DataGoogleArtifactRegistryRepositoriesRepositories</a>

---



