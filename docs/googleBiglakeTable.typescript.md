# `googleBiglakeTable` Submodule <a name="`googleBiglakeTable` Submodule" id="@cdktf/provider-google-beta.googleBiglakeTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeTable <a name="GoogleBiglakeTable" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table google_biglake_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

new googleBiglakeTable.GoogleBiglakeTable(scope: Construct, id: string, config: GoogleBiglakeTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig">GoogleBiglakeTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig">GoogleBiglakeTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putHiveOptions">putHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetHiveOptions">resetHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHiveOptions` <a name="putHiveOptions" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putHiveOptions"></a>

```typescript
public putHiveOptions(value: GoogleBiglakeTableHiveOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putHiveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBiglakeTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>

---

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetHiveOptions` <a name="resetHiveOptions" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetHiveOptions"></a>

```typescript
public resetHiveOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBiglakeTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isConstruct"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

googleBiglakeTable.GoogleBiglakeTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformElement"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

googleBiglakeTable.GoogleBiglakeTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformResource"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

googleBiglakeTable.GoogleBiglakeTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBiglakeTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBiglakeTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBiglakeTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.hiveOptions">hiveOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference">GoogleBiglakeTableHiveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference">GoogleBiglakeTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.hiveOptionsInput">hiveOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `hiveOptions`<sup>Required</sup> <a name="hiveOptions" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.hiveOptions"></a>

```typescript
public readonly hiveOptions: GoogleBiglakeTableHiveOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference">GoogleBiglakeTableHiveOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBiglakeTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference">GoogleBiglakeTableTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hiveOptionsInput`<sup>Optional</sup> <a name="hiveOptionsInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.hiveOptionsInput"></a>

```typescript
public readonly hiveOptionsInput: GoogleBiglakeTableHiveOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBiglakeTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeTableConfig <a name="GoogleBiglakeTableConfig" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.Initializer"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

const googleBiglakeTableConfig: googleBiglakeTable.GoogleBiglakeTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.name">name</a></code> | <code>string</code> | Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.database">database</a></code> | <code>string</code> | The id of the parent database. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.hiveOptions">hiveOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#id GoogleBiglakeTable#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.type">type</a></code> | <code>string</code> | The database type. Possible values: ["HIVE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#name GoogleBiglakeTable#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The id of the parent database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#database GoogleBiglakeTable#database}

---

##### `hiveOptions`<sup>Optional</sup> <a name="hiveOptions" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.hiveOptions"></a>

```typescript
public readonly hiveOptions: GoogleBiglakeTableHiveOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#hive_options GoogleBiglakeTable#hive_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#id GoogleBiglakeTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBiglakeTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#timeouts GoogleBiglakeTable#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The database type. Possible values: ["HIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#type GoogleBiglakeTable#type}

---

### GoogleBiglakeTableHiveOptions <a name="GoogleBiglakeTableHiveOptions" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.Initializer"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

const googleBiglakeTableHiveOptions: googleBiglakeTable.GoogleBiglakeTableHiveOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Stores user supplied Hive table parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.tableType">tableType</a></code> | <code>string</code> | Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Stores user supplied Hive table parameters.

An object containing a
list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#parameters GoogleBiglakeTable#parameters}

---

##### `storageDescriptor`<sup>Optional</sup> <a name="storageDescriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: GoogleBiglakeTableHiveOptionsStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#storage_descriptor GoogleBiglakeTable#storage_descriptor}

---

##### `tableType`<sup>Optional</sup> <a name="tableType" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#table_type GoogleBiglakeTable#table_type}

---

### GoogleBiglakeTableHiveOptionsStorageDescriptor <a name="GoogleBiglakeTableHiveOptionsStorageDescriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.Initializer"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

const googleBiglakeTableHiveOptionsStorageDescriptor: googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>string</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.locationUri">locationUri</a></code> | <code>string</code> | Cloud Storage folder URI where the table data is stored, starting with "gs://". |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>string</code> | The fully qualified Java class name of the output format. |

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#input_format GoogleBiglakeTable#input_format}

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

Cloud Storage folder URI where the table data is stored, starting with "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#location_uri GoogleBiglakeTable#location_uri}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#output_format GoogleBiglakeTable#output_format}

---

### GoogleBiglakeTableTimeouts <a name="GoogleBiglakeTableTimeouts" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.Initializer"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

const googleBiglakeTableTimeouts: googleBiglakeTable.GoogleBiglakeTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#create GoogleBiglakeTable#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#delete GoogleBiglakeTable#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#update GoogleBiglakeTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#create GoogleBiglakeTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#delete GoogleBiglakeTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_biglake_table#update GoogleBiglakeTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeTableHiveOptionsOutputReference <a name="GoogleBiglakeTableHiveOptionsOutputReference" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

new googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetStorageDescriptor">resetStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetTableType">resetTableType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.putStorageDescriptor"></a>

```typescript
public putStorageDescriptor(value: GoogleBiglakeTableHiveOptionsStorageDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a>

---

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetStorageDescriptor` <a name="resetStorageDescriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetStorageDescriptor"></a>

```typescript
public resetStorageDescriptor(): void
```

##### `resetTableType` <a name="resetTableType" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.resetTableType"></a>

```typescript
public resetTableType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference">GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.tableTypeInput">tableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.tableType">tableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference">GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.storageDescriptorInput"></a>

```typescript
public readonly storageDescriptorInput: GoogleBiglakeTableHiveOptionsStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a>

---

##### `tableTypeInput`<sup>Optional</sup> <a name="tableTypeInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.tableTypeInput"></a>

```typescript
public readonly tableTypeInput: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBiglakeTableHiveOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptions">GoogleBiglakeTableHiveOptions</a>

---


### GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference <a name="GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

new googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetInputFormat"></a>

```typescript
public resetInputFormat(): void
```

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetLocationUri"></a>

```typescript
public resetLocationUri(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUriInput">locationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormatInput"></a>

```typescript
public readonly inputFormatInput: string;
```

- *Type:* string

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUriInput"></a>

```typescript
public readonly locationUriInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBiglakeTableHiveOptionsStorageDescriptor;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableHiveOptionsStorageDescriptor">GoogleBiglakeTableHiveOptionsStorageDescriptor</a>

---


### GoogleBiglakeTableTimeoutsOutputReference <a name="GoogleBiglakeTableTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBiglakeTable } from '@cdktf/provider-google-beta'

new googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBiglakeTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBiglakeTable.GoogleBiglakeTableTimeouts">GoogleBiglakeTableTimeouts</a>

---



