# `googleDataplexEntry` Submodule <a name="`googleDataplexEntry` Submodule" id="@cdktf/provider-google-beta.googleDataplexEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexEntry <a name="GoogleDataplexEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry google_dataplex_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

new googleDataplexEntry.GoogleDataplexEntry(scope: Construct, id: string, config: GoogleDataplexEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig">GoogleDataplexEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig">GoogleDataplexEntryConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAspects` <a name="putAspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putAspects"></a>

```typescript
public putAspects(value: IResolvable | GoogleDataplexEntryAspects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putAspects.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>[]

---

##### `putEntrySource` <a name="putEntrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource"></a>

```typescript
public putEntrySource(value: GoogleDataplexEntryEntrySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putEntrySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataplexEntryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

---

##### `resetAspects` <a name="resetAspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetAspects"></a>

```typescript
public resetAspects(): void
```

##### `resetEntryGroupId` <a name="resetEntryGroupId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryGroupId"></a>

```typescript
public resetEntryGroupId(): void
```

##### `resetEntryId` <a name="resetEntryId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntryId"></a>

```typescript
public resetEntryId(): void
```

##### `resetEntrySource` <a name="resetEntrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetEntrySource"></a>

```typescript
public resetEntrySource(): void
```

##### `resetFullyQualifiedName` <a name="resetFullyQualifiedName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetFullyQualifiedName"></a>

```typescript
public resetFullyQualifiedName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetParentEntry` <a name="resetParentEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetParentEntry"></a>

```typescript
public resetParentEntry(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
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

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

googleDataplexEntry.GoogleDataplexEntry.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformElement"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

googleDataplexEntry.GoogleDataplexEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformResource"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

googleDataplexEntry.GoogleDataplexEntry.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataplexEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspects">aspects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList">GoogleDataplexEntryAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySource">entrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference">GoogleDataplexEntryEntrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference">GoogleDataplexEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspectsInput">aspectsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupIdInput">entryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryIdInput">entryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySourceInput">entrySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryTypeInput">entryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedNameInput">fullyQualifiedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntryInput">parentEntryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupId">entryGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryId">entryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryType">entryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntry">parentEntry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aspects`<sup>Required</sup> <a name="aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspects"></a>

```typescript
public readonly aspects: GoogleDataplexEntryAspectsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList">GoogleDataplexEntryAspectsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `entrySource`<sup>Required</sup> <a name="entrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySource"></a>

```typescript
public readonly entrySource: GoogleDataplexEntryEntrySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference">GoogleDataplexEntryEntrySourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexEntryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference">GoogleDataplexEntryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `aspectsInput`<sup>Optional</sup> <a name="aspectsInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.aspectsInput"></a>

```typescript
public readonly aspectsInput: IResolvable | GoogleDataplexEntryAspects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>[]

---

##### `entryGroupIdInput`<sup>Optional</sup> <a name="entryGroupIdInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupIdInput"></a>

```typescript
public readonly entryGroupIdInput: string;
```

- *Type:* string

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryIdInput"></a>

```typescript
public readonly entryIdInput: string;
```

- *Type:* string

---

##### `entrySourceInput`<sup>Optional</sup> <a name="entrySourceInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entrySourceInput"></a>

```typescript
public readonly entrySourceInput: GoogleDataplexEntryEntrySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

---

##### `entryTypeInput`<sup>Optional</sup> <a name="entryTypeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryTypeInput"></a>

```typescript
public readonly entryTypeInput: string;
```

- *Type:* string

---

##### `fullyQualifiedNameInput`<sup>Optional</sup> <a name="fullyQualifiedNameInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedNameInput"></a>

```typescript
public readonly fullyQualifiedNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentEntryInput`<sup>Optional</sup> <a name="parentEntryInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntryInput"></a>

```typescript
public readonly parentEntryInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataplexEntryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryGroupId"></a>

```typescript
public readonly entryGroupId: string;
```

- *Type:* string

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.entryType"></a>

```typescript
public readonly entryType: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parentEntry`<sup>Required</sup> <a name="parentEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.parentEntry"></a>

```typescript
public readonly parentEntry: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexEntryAspects <a name="GoogleDataplexEntryAspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

const googleDataplexEntryAspects: googleDataplexEntry.GoogleDataplexEntryAspects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspect">aspect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspectKey">aspectKey</a></code> | <code>string</code> | Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:. |

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspect"></a>

```typescript
public readonly aspect: GoogleDataplexEntryAspectsAspect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#aspect GoogleDataplexEntry#aspect}

---

##### `aspectKey`<sup>Required</sup> <a name="aspectKey" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects.property.aspectKey"></a>

```typescript
public readonly aspectKey: string;
```

- *Type:* string

Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:.

If the aspect is attached directly to the entry: {project_number}.{locationId}.{aspectTypeId}
If the aspect is attached to an entry's path: {project_number}.{locationId}.{aspectTypeId}@{path}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#aspect_key GoogleDataplexEntry#aspect_key}

---

### GoogleDataplexEntryAspectsAspect <a name="GoogleDataplexEntryAspectsAspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

const googleDataplexEntryAspectsAspect: googleDataplexEntry.GoogleDataplexEntryAspectsAspect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.property.data">data</a></code> | <code>string</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#data GoogleDataplexEntry#data}

---

### GoogleDataplexEntryConfig <a name="GoogleDataplexEntryConfig" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

const googleDataplexEntryConfig: googleDataplexEntry.GoogleDataplexEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryType">entryType</a></code> | <code>string</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.aspects">aspects</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>[]</code> | aspects block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryGroupId">entryGroupId</a></code> | <code>string</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryId">entryId</a></code> | <code>string</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entrySource">entrySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.location">location</a></code> | <code>string</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.parentEntry">parentEntry</a></code> | <code>string</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryType"></a>

```typescript
public readonly entryType: string;
```

- *Type:* string

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#entry_type GoogleDataplexEntry#entry_type}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.aspects"></a>

```typescript
public readonly aspects: IResolvable | GoogleDataplexEntryAspects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>[]

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#aspects GoogleDataplexEntry#aspects}

---

##### `entryGroupId`<sup>Optional</sup> <a name="entryGroupId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryGroupId"></a>

```typescript
public readonly entryGroupId: string;
```

- *Type:* string

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#entry_group_id GoogleDataplexEntry#entry_group_id}

---

##### `entryId`<sup>Optional</sup> <a name="entryId" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entryId"></a>

```typescript
public readonly entryId: string;
```

- *Type:* string

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#entry_id GoogleDataplexEntry#entry_id}

---

##### `entrySource`<sup>Optional</sup> <a name="entrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.entrySource"></a>

```typescript
public readonly entrySource: GoogleDataplexEntryEntrySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#entry_source GoogleDataplexEntry#entry_source}

---

##### `fullyQualifiedName`<sup>Optional</sup> <a name="fullyQualifiedName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#fully_qualified_name GoogleDataplexEntry#fully_qualified_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#id GoogleDataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#location GoogleDataplexEntry#location}

---

##### `parentEntry`<sup>Optional</sup> <a name="parentEntry" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.parentEntry"></a>

```typescript
public readonly parentEntry: string;
```

- *Type:* string

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#parent_entry GoogleDataplexEntry#parent_entry}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#project GoogleDataplexEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexEntryTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#timeouts GoogleDataplexEntry#timeouts}

---

### GoogleDataplexEntryEntrySource <a name="GoogleDataplexEntryEntrySource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

const googleDataplexEntryEntrySource: googleDataplexEntry.GoogleDataplexEntryEntrySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.ancestors">ancestors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>[]</code> | ancestors block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.createTime">createTime</a></code> | <code>string</code> | The time when the resource was created in the source system. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.description">description</a></code> | <code>string</code> | A description of the data resource. Maximum length is 2,000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.displayName">displayName</a></code> | <code>string</code> | A user-friendly display name. Maximum length is 500 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.platform">platform</a></code> | <code>string</code> | The platform containing the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.resource">resource</a></code> | <code>string</code> | The name of the resource in the source system. Maximum length is 4,000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | The name of the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.updateTime">updateTime</a></code> | <code>string</code> | The time when the resource was last updated in the source system. |

---

##### `ancestors`<sup>Optional</sup> <a name="ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.ancestors"></a>

```typescript
public readonly ancestors: IResolvable | GoogleDataplexEntryEntrySourceAncestors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>[]

ancestors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#ancestors GoogleDataplexEntry#ancestors}

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

The time when the resource was created in the source system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#create_time GoogleDataplexEntry#create_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the data resource. Maximum length is 2,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#description GoogleDataplexEntry#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-friendly display name. Maximum length is 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#display_name GoogleDataplexEntry#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

The maximum size of keys and values is 128 characters each.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#labels GoogleDataplexEntry#labels}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

The platform containing the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#platform GoogleDataplexEntry#platform}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

The name of the resource in the source system. Maximum length is 4,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#resource GoogleDataplexEntry#resource}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

The name of the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#system GoogleDataplexEntry#system}

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

The time when the resource was last updated in the source system.

If the entry exists in the system and its EntrySource has updateTime populated,
further updates to the EntrySource of the entry must provide incremental updates to its updateTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#update_time GoogleDataplexEntry#update_time}

---

### GoogleDataplexEntryEntrySourceAncestors <a name="GoogleDataplexEntryEntrySourceAncestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

const googleDataplexEntryEntrySourceAncestors: googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.name">name</a></code> | <code>string</code> | The name of the ancestor resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.type">type</a></code> | <code>string</code> | The type of the ancestor resource. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#name GoogleDataplexEntry#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#type GoogleDataplexEntry#type}

---

### GoogleDataplexEntryTimeouts <a name="GoogleDataplexEntryTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

const googleDataplexEntryTimeouts: googleDataplexEntry.GoogleDataplexEntryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#create GoogleDataplexEntry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#delete GoogleDataplexEntry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#update GoogleDataplexEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#create GoogleDataplexEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#delete GoogleDataplexEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.45.0/docs/resources/google_dataplex_entry#update GoogleDataplexEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexEntryAspectsAspectOutputReference <a name="GoogleDataplexEntryAspectsAspectOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

new googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.aspectType">aspectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aspectType`<sup>Required</sup> <a name="aspectType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.aspectType"></a>

```typescript
public readonly aspectType: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexEntryAspectsAspect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

---


### GoogleDataplexEntryAspectsList <a name="GoogleDataplexEntryAspectsList" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

new googleDataplexEntry.GoogleDataplexEntryAspectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.get"></a>

```typescript
public get(index: number): GoogleDataplexEntryAspectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexEntryAspects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>[]

---


### GoogleDataplexEntryAspectsOutputReference <a name="GoogleDataplexEntryAspectsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

new googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAspect` <a name="putAspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.putAspect"></a>

```typescript
public putAspect(value: GoogleDataplexEntryAspectsAspect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.putAspect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspect">aspect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference">GoogleDataplexEntryAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectInput">aspectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKeyInput">aspectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKey">aspectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspect"></a>

```typescript
public readonly aspect: GoogleDataplexEntryAspectsAspectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspectOutputReference">GoogleDataplexEntryAspectsAspectOutputReference</a>

---

##### `aspectInput`<sup>Optional</sup> <a name="aspectInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectInput"></a>

```typescript
public readonly aspectInput: GoogleDataplexEntryAspectsAspect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsAspect">GoogleDataplexEntryAspectsAspect</a>

---

##### `aspectKeyInput`<sup>Optional</sup> <a name="aspectKeyInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKeyInput"></a>

```typescript
public readonly aspectKeyInput: string;
```

- *Type:* string

---

##### `aspectKey`<sup>Required</sup> <a name="aspectKey" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.aspectKey"></a>

```typescript
public readonly aspectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexEntryAspects;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryAspects">GoogleDataplexEntryAspects</a>

---


### GoogleDataplexEntryEntrySourceAncestorsList <a name="GoogleDataplexEntryEntrySourceAncestorsList" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

new googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.get"></a>

```typescript
public get(index: number): GoogleDataplexEntryEntrySourceAncestorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexEntryEntrySourceAncestors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>[]

---


### GoogleDataplexEntryEntrySourceAncestorsOutputReference <a name="GoogleDataplexEntryEntrySourceAncestorsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

new googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexEntryEntrySourceAncestors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>

---


### GoogleDataplexEntryEntrySourceOutputReference <a name="GoogleDataplexEntryEntrySourceOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

new googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAncestors` <a name="putAncestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.putAncestors"></a>

```typescript
public putAncestors(value: IResolvable | GoogleDataplexEntryEntrySourceAncestors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.putAncestors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>[]

---

##### `resetAncestors` <a name="resetAncestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetAncestors"></a>

```typescript
public resetAncestors(): void
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetCreateTime"></a>

```typescript
public resetCreateTime(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetSystemAttribute"></a>

```typescript
public resetSystemAttribute(): void
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.resetUpdateTime"></a>

```typescript
public resetUpdateTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestors">ancestors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList">GoogleDataplexEntryEntrySourceAncestorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestorsInput">ancestorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTimeInput">createTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTimeInput">updateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ancestors`<sup>Required</sup> <a name="ancestors" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestors"></a>

```typescript
public readonly ancestors: GoogleDataplexEntryEntrySourceAncestorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestorsList">GoogleDataplexEntryEntrySourceAncestorsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `ancestorsInput`<sup>Optional</sup> <a name="ancestorsInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.ancestorsInput"></a>

```typescript
public readonly ancestorsInput: IResolvable | GoogleDataplexEntryEntrySourceAncestors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceAncestors">GoogleDataplexEntryEntrySourceAncestors</a>[]

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTimeInput"></a>

```typescript
public readonly createTimeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttributeInput"></a>

```typescript
public readonly systemAttributeInput: string;
```

- *Type:* string

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTimeInput"></a>

```typescript
public readonly updateTimeInput: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexEntryEntrySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryEntrySource">GoogleDataplexEntryEntrySource</a>

---


### GoogleDataplexEntryTimeoutsOutputReference <a name="GoogleDataplexEntryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataplexEntry } from '@cdktf/provider-google-beta'

new googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexEntryTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntry.GoogleDataplexEntryTimeouts">GoogleDataplexEntryTimeouts</a>

---



