# `googleBigqueryBiReservation` Submodule <a name="`googleBigqueryBiReservation` Submodule" id="@cdktf/provider-google-beta.googleBigqueryBiReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryBiReservation <a name="GoogleBigqueryBiReservation" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation google_bigquery_bi_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.Initializer"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

new googleBigqueryBiReservation.GoogleBigqueryBiReservation(scope: Construct, id: string, config: GoogleBigqueryBiReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig">GoogleBigqueryBiReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig">GoogleBigqueryBiReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.putPreferredTables">putPreferredTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetPreferredTables">resetPreferredTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPreferredTables` <a name="putPreferredTables" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.putPreferredTables"></a>

```typescript
public putPreferredTables(value: IResolvable | GoogleBigqueryBiReservationPreferredTables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.putPreferredTables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryBiReservationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts">GoogleBigqueryBiReservationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPreferredTables` <a name="resetPreferredTables" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetPreferredTables"></a>

```typescript
public resetPreferredTables(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryBiReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isConstruct"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

googleBigqueryBiReservation.GoogleBigqueryBiReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isTerraformElement"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

googleBigqueryBiReservation.GoogleBigqueryBiReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isTerraformResource"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

googleBigqueryBiReservation.GoogleBigqueryBiReservation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.generateConfigForImport"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

googleBigqueryBiReservation.GoogleBigqueryBiReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryBiReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryBiReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryBiReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryBiReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.preferredTables">preferredTables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList">GoogleBigqueryBiReservationPreferredTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference">GoogleBigqueryBiReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.preferredTablesInput">preferredTablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts">GoogleBigqueryBiReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.size">size</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preferredTables`<sup>Required</sup> <a name="preferredTables" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.preferredTables"></a>

```typescript
public readonly preferredTables: GoogleBigqueryBiReservationPreferredTablesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList">GoogleBigqueryBiReservationPreferredTablesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryBiReservationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference">GoogleBigqueryBiReservationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `preferredTablesInput`<sup>Optional</sup> <a name="preferredTablesInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.preferredTablesInput"></a>

```typescript
public readonly preferredTablesInput: IResolvable | GoogleBigqueryBiReservationPreferredTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryBiReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts">GoogleBigqueryBiReservationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryBiReservationConfig <a name="GoogleBigqueryBiReservationConfig" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.Initializer"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

const googleBigqueryBiReservationConfig: googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.location">location</a></code> | <code>string</code> | LOCATION_DESCRIPTION. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#id GoogleBigqueryBiReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.preferredTables">preferredTables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a>[]</code> | preferred_tables block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#project GoogleBigqueryBiReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.size">size</a></code> | <code>number</code> | Size of a reservation, in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts">GoogleBigqueryBiReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

LOCATION_DESCRIPTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#location GoogleBigqueryBiReservation#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#id GoogleBigqueryBiReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferredTables`<sup>Optional</sup> <a name="preferredTables" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.preferredTables"></a>

```typescript
public readonly preferredTables: IResolvable | GoogleBigqueryBiReservationPreferredTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a>[]

preferred_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#preferred_tables GoogleBigqueryBiReservation#preferred_tables}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#project GoogleBigqueryBiReservation#project}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Size of a reservation, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#size GoogleBigqueryBiReservation#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryBiReservationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts">GoogleBigqueryBiReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#timeouts GoogleBigqueryBiReservation#timeouts}

---

### GoogleBigqueryBiReservationPreferredTables <a name="GoogleBigqueryBiReservationPreferredTables" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables.Initializer"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

const googleBigqueryBiReservationPreferredTables: googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables.property.datasetId">datasetId</a></code> | <code>string</code> | The ID of the dataset in the above project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables.property.projectId">projectId</a></code> | <code>string</code> | The assigned project ID of the project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables.property.tableId">tableId</a></code> | <code>string</code> | The ID of the table in the above dataset. |

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The ID of the dataset in the above project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#dataset_id GoogleBigqueryBiReservation#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The assigned project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#project_id GoogleBigqueryBiReservation#project_id}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The ID of the table in the above dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#table_id GoogleBigqueryBiReservation#table_id}

---

### GoogleBigqueryBiReservationTimeouts <a name="GoogleBigqueryBiReservationTimeouts" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts.Initializer"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

const googleBigqueryBiReservationTimeouts: googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#create GoogleBigqueryBiReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#delete GoogleBigqueryBiReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#update GoogleBigqueryBiReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#create GoogleBigqueryBiReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#delete GoogleBigqueryBiReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_bi_reservation#update GoogleBigqueryBiReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryBiReservationPreferredTablesList <a name="GoogleBigqueryBiReservationPreferredTablesList" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.Initializer"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

new googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.get"></a>

```typescript
public get(index: number): GoogleBigqueryBiReservationPreferredTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryBiReservationPreferredTables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a>[]

---


### GoogleBigqueryBiReservationPreferredTablesOutputReference <a name="GoogleBigqueryBiReservationPreferredTablesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

new googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resetTableId">resetTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.resetTableId"></a>

```typescript
public resetTableId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryBiReservationPreferredTables;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationPreferredTables">GoogleBigqueryBiReservationPreferredTables</a>

---


### GoogleBigqueryBiReservationTimeoutsOutputReference <a name="GoogleBigqueryBiReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryBiReservation } from '@cdktf/provider-google-beta'

new googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts">GoogleBigqueryBiReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryBiReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryBiReservation.GoogleBigqueryBiReservationTimeouts">GoogleBigqueryBiReservationTimeouts</a>

---



