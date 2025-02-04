# `dataGoogleTpuV2AcceleratorTypes` Submodule <a name="`dataGoogleTpuV2AcceleratorTypes` Submodule" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleTpuV2AcceleratorTypes <a name="DataGoogleTpuV2AcceleratorTypes" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/data-sources/google_tpu_v2_accelerator_types google_tpu_v2_accelerator_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer"></a>

```typescript
import { dataGoogleTpuV2AcceleratorTypes } from '@cdktf/provider-google-beta'

new dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes(scope: Construct, id: string, config?: DataGoogleTpuV2AcceleratorTypesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig">DataGoogleTpuV2AcceleratorTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig">DataGoogleTpuV2AcceleratorTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleTpuV2AcceleratorTypes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct"></a>

```typescript
import { dataGoogleTpuV2AcceleratorTypes } from '@cdktf/provider-google-beta'

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement"></a>

```typescript
import { dataGoogleTpuV2AcceleratorTypes } from '@cdktf/provider-google-beta'

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource"></a>

```typescript
import { dataGoogleTpuV2AcceleratorTypes } from '@cdktf/provider-google-beta'

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport"></a>

```typescript
import { dataGoogleTpuV2AcceleratorTypes } from '@cdktf/provider-google-beta'

dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleTpuV2AcceleratorTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleTpuV2AcceleratorTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleTpuV2AcceleratorTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/data-sources/google_tpu_v2_accelerator_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleTpuV2AcceleratorTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleTpuV2AcceleratorTypesConfig <a name="DataGoogleTpuV2AcceleratorTypesConfig" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.Initializer"></a>

```typescript
import { dataGoogleTpuV2AcceleratorTypes } from '@cdktf/provider-google-beta'

const dataGoogleTpuV2AcceleratorTypesConfig: dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/data-sources/google_tpu_v2_accelerator_types#id DataGoogleTpuV2AcceleratorTypes#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/data-sources/google_tpu_v2_accelerator_types#project DataGoogleTpuV2AcceleratorTypes#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/data-sources/google_tpu_v2_accelerator_types#zone DataGoogleTpuV2AcceleratorTypes#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/data-sources/google_tpu_v2_accelerator_types#id DataGoogleTpuV2AcceleratorTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/data-sources/google_tpu_v2_accelerator_types#project DataGoogleTpuV2AcceleratorTypes#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/data-sources/google_tpu_v2_accelerator_types#zone DataGoogleTpuV2AcceleratorTypes#zone}.

---



