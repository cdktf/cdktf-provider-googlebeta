# `googleLoggingLinkedDataset` Submodule <a name="`googleLoggingLinkedDataset` Submodule" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingLinkedDataset <a name="GoogleLoggingLinkedDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset google_logging_linked_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

new googleLoggingLinkedDataset.GoogleLoggingLinkedDataset(scope: Construct, id: string, config: GoogleLoggingLinkedDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig">GoogleLoggingLinkedDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig">GoogleLoggingLinkedDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putBigqueryDataset">putBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetBigqueryDataset">resetBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryDataset` <a name="putBigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putBigqueryDataset"></a>

```typescript
public putBigqueryDataset(value: IResolvable | GoogleLoggingLinkedDatasetBigqueryDataset[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putBigqueryDataset.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleLoggingLinkedDatasetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a>

---

##### `resetBigqueryDataset` <a name="resetBigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetBigqueryDataset"></a>

```typescript
public resetBigqueryDataset(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingLinkedDataset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isConstruct"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformElement"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformResource"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleLoggingLinkedDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingLinkedDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingLinkedDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingLinkedDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bigqueryDataset">bigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList">GoogleLoggingLinkedDatasetBigqueryDatasetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference">GoogleLoggingLinkedDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bigqueryDatasetInput">bigqueryDatasetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.linkIdInput">linkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryDataset`<sup>Required</sup> <a name="bigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bigqueryDataset"></a>

```typescript
public readonly bigqueryDataset: GoogleLoggingLinkedDatasetBigqueryDatasetList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList">GoogleLoggingLinkedDatasetBigqueryDatasetList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleLoggingLinkedDatasetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference">GoogleLoggingLinkedDatasetTimeoutsOutputReference</a>

---

##### `bigqueryDatasetInput`<sup>Optional</sup> <a name="bigqueryDatasetInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bigqueryDatasetInput"></a>

```typescript
public readonly bigqueryDatasetInput: IResolvable | GoogleLoggingLinkedDatasetBigqueryDataset[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a>[]

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `linkIdInput`<sup>Optional</sup> <a name="linkIdInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.linkIdInput"></a>

```typescript
public readonly linkIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleLoggingLinkedDatasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingLinkedDatasetBigqueryDataset <a name="GoogleLoggingLinkedDatasetBigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset.Initializer"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

const googleLoggingLinkedDatasetBigqueryDataset: googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset = { ... }
```


### GoogleLoggingLinkedDatasetConfig <a name="GoogleLoggingLinkedDatasetConfig" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.Initializer"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

const googleLoggingLinkedDatasetConfig: googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.bucket">bucket</a></code> | <code>string</code> | The bucket to which the linked dataset is attached. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.linkId">linkId</a></code> | <code>string</code> | The id of the linked dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.bigqueryDataset">bigqueryDataset</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a>[]</code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.description">description</a></code> | <code>string</code> | Describes this link. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#id GoogleLoggingLinkedDataset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.location">location</a></code> | <code>string</code> | The location of the linked dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the linked dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The bucket to which the linked dataset is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#bucket GoogleLoggingLinkedDataset#bucket}

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

The id of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#link_id GoogleLoggingLinkedDataset#link_id}

---

##### `bigqueryDataset`<sup>Optional</sup> <a name="bigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.bigqueryDataset"></a>

```typescript
public readonly bigqueryDataset: IResolvable | GoogleLoggingLinkedDatasetBigqueryDataset[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a>[]

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#bigquery_dataset GoogleLoggingLinkedDataset#bigquery_dataset}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Describes this link. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#description GoogleLoggingLinkedDataset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#id GoogleLoggingLinkedDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#location GoogleLoggingLinkedDataset#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#parent GoogleLoggingLinkedDataset#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleLoggingLinkedDatasetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#timeouts GoogleLoggingLinkedDataset#timeouts}

---

### GoogleLoggingLinkedDatasetTimeouts <a name="GoogleLoggingLinkedDatasetTimeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.Initializer"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

const googleLoggingLinkedDatasetTimeouts: googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#create GoogleLoggingLinkedDataset#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#delete GoogleLoggingLinkedDataset#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#create GoogleLoggingLinkedDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_linked_dataset#delete GoogleLoggingLinkedDataset#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingLinkedDatasetBigqueryDatasetList <a name="GoogleLoggingLinkedDatasetBigqueryDatasetList" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

new googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.get"></a>

```typescript
public get(index: number): GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingLinkedDatasetBigqueryDataset[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a>[]

---


### GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference <a name="GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

new googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingLinkedDatasetBigqueryDataset;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset">GoogleLoggingLinkedDatasetBigqueryDataset</a>

---


### GoogleLoggingLinkedDatasetTimeoutsOutputReference <a name="GoogleLoggingLinkedDatasetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleLoggingLinkedDataset } from '@cdktf/provider-google-beta'

new googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingLinkedDatasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a>

---



