# `googleBigqueryReservation` Submodule <a name="`googleBigqueryReservation` Submodule" id="@cdktf/provider-google-beta.googleBigqueryReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryReservation <a name="GoogleBigqueryReservation" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation google_bigquery_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

new googleBigqueryReservation.GoogleBigqueryReservation(scope: Construct, id: string, config: GoogleBigqueryReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig">GoogleBigqueryReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig">GoogleBigqueryReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putAutoscale">putAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetAutoscale">resetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetConcurrency">resetConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetIgnoreIdleSlots">resetIgnoreIdleSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetMaxSlots">resetMaxSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetScalingMode">resetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetSecondaryLocation">resetSecondaryLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscale` <a name="putAutoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putAutoscale"></a>

```typescript
public putAutoscale(value: GoogleBigqueryReservationAutoscale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryReservationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>

---

##### `resetAutoscale` <a name="resetAutoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetAutoscale"></a>

```typescript
public resetAutoscale(): void
```

##### `resetConcurrency` <a name="resetConcurrency" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetConcurrency"></a>

```typescript
public resetConcurrency(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreIdleSlots` <a name="resetIgnoreIdleSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetIgnoreIdleSlots"></a>

```typescript
public resetIgnoreIdleSlots(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMaxSlots` <a name="resetMaxSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetMaxSlots"></a>

```typescript
public resetMaxSlots(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetScalingMode` <a name="resetScalingMode" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetScalingMode"></a>

```typescript
public resetScalingMode(): void
```

##### `resetSecondaryLocation` <a name="resetSecondaryLocation" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetSecondaryLocation"></a>

```typescript
public resetSecondaryLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isConstruct"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

googleBigqueryReservation.GoogleBigqueryReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformElement"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

googleBigqueryReservation.GoogleBigqueryReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformResource"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

googleBigqueryReservation.GoogleBigqueryReservation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.generateConfigForImport"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

googleBigqueryReservation.GoogleBigqueryReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference">GoogleBigqueryReservationAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.originalPrimaryLocation">originalPrimaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.primaryLocation">primaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.replicationStatus">replicationStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList">GoogleBigqueryReservationReplicationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference">GoogleBigqueryReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.autoscaleInput">autoscaleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.concurrencyInput">concurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.ignoreIdleSlotsInput">ignoreIdleSlotsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.maxSlotsInput">maxSlotsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.scalingModeInput">scalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.secondaryLocationInput">secondaryLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.slotCapacityInput">slotCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.concurrency">concurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.ignoreIdleSlots">ignoreIdleSlots</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.maxSlots">maxSlots</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.scalingMode">scalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.secondaryLocation">secondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.slotCapacity">slotCapacity</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscale`<sup>Required</sup> <a name="autoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.autoscale"></a>

```typescript
public readonly autoscale: GoogleBigqueryReservationAutoscaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference">GoogleBigqueryReservationAutoscaleOutputReference</a>

---

##### `originalPrimaryLocation`<sup>Required</sup> <a name="originalPrimaryLocation" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.originalPrimaryLocation"></a>

```typescript
public readonly originalPrimaryLocation: string;
```

- *Type:* string

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.primaryLocation"></a>

```typescript
public readonly primaryLocation: string;
```

- *Type:* string

---

##### `replicationStatus`<sup>Required</sup> <a name="replicationStatus" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.replicationStatus"></a>

```typescript
public readonly replicationStatus: GoogleBigqueryReservationReplicationStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList">GoogleBigqueryReservationReplicationStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryReservationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference">GoogleBigqueryReservationTimeoutsOutputReference</a>

---

##### `autoscaleInput`<sup>Optional</sup> <a name="autoscaleInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.autoscaleInput"></a>

```typescript
public readonly autoscaleInput: GoogleBigqueryReservationAutoscale;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a>

---

##### `concurrencyInput`<sup>Optional</sup> <a name="concurrencyInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.concurrencyInput"></a>

```typescript
public readonly concurrencyInput: number;
```

- *Type:* number

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreIdleSlotsInput`<sup>Optional</sup> <a name="ignoreIdleSlotsInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.ignoreIdleSlotsInput"></a>

```typescript
public readonly ignoreIdleSlotsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maxSlotsInput`<sup>Optional</sup> <a name="maxSlotsInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.maxSlotsInput"></a>

```typescript
public readonly maxSlotsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scalingModeInput`<sup>Optional</sup> <a name="scalingModeInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.scalingModeInput"></a>

```typescript
public readonly scalingModeInput: string;
```

- *Type:* string

---

##### `secondaryLocationInput`<sup>Optional</sup> <a name="secondaryLocationInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.secondaryLocationInput"></a>

```typescript
public readonly secondaryLocationInput: string;
```

- *Type:* string

---

##### `slotCapacityInput`<sup>Optional</sup> <a name="slotCapacityInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.slotCapacityInput"></a>

```typescript
public readonly slotCapacityInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreIdleSlots`<sup>Required</sup> <a name="ignoreIdleSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.ignoreIdleSlots"></a>

```typescript
public readonly ignoreIdleSlots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxSlots`<sup>Required</sup> <a name="maxSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.maxSlots"></a>

```typescript
public readonly maxSlots: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.scalingMode"></a>

```typescript
public readonly scalingMode: string;
```

- *Type:* string

---

##### `secondaryLocation`<sup>Required</sup> <a name="secondaryLocation" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.secondaryLocation"></a>

```typescript
public readonly secondaryLocation: string;
```

- *Type:* string

---

##### `slotCapacity`<sup>Required</sup> <a name="slotCapacity" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.slotCapacity"></a>

```typescript
public readonly slotCapacity: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryReservationAutoscale <a name="GoogleBigqueryReservationAutoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

const googleBigqueryReservationAutoscale: googleBigqueryReservation.GoogleBigqueryReservationAutoscale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale.property.maxSlots">maxSlots</a></code> | <code>number</code> | Number of slots to be scaled when needed. |

---

##### `maxSlots`<sup>Optional</sup> <a name="maxSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale.property.maxSlots"></a>

```typescript
public readonly maxSlots: number;
```

- *Type:* number

Number of slots to be scaled when needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#max_slots GoogleBigqueryReservation#max_slots}

---

### GoogleBigqueryReservationConfig <a name="GoogleBigqueryReservationConfig" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

const googleBigqueryReservationConfig: googleBigqueryReservation.GoogleBigqueryReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.name">name</a></code> | <code>string</code> | The name of the reservation. This field must only contain alphanumeric characters or dash. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.slotCapacity">slotCapacity</a></code> | <code>number</code> | Minimum slots available to this reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.autoscale">autoscale</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.concurrency">concurrency</a></code> | <code>number</code> | Maximum number of queries that are allowed to run concurrently in this reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.edition">edition</a></code> | <code>string</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#id GoogleBigqueryReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.ignoreIdleSlots">ignoreIdleSlots</a></code> | <code>boolean \| cdktf.IResolvable</code> | If false, any query using this reservation will use idle slots from other reservations within the same admin project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.maxSlots">maxSlots</a></code> | <code>number</code> | The overall max slots for the reservation, covering slotCapacity (baseline), idle slots (if ignoreIdleSlots is false) and scaled slots. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#project GoogleBigqueryReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.scalingMode">scalingMode</a></code> | <code>string</code> | The scaling mode for the reservation. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.secondaryLocation">secondaryLocation</a></code> | <code>string</code> | The current location of the reservation's secondary replica. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the reservation. This field must only contain alphanumeric characters or dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#name GoogleBigqueryReservation#name}

---

##### `slotCapacity`<sup>Required</sup> <a name="slotCapacity" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.slotCapacity"></a>

```typescript
public readonly slotCapacity: number;
```

- *Type:* number

Minimum slots available to this reservation.

A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#slot_capacity GoogleBigqueryReservation#slot_capacity}

---

##### `autoscale`<sup>Optional</sup> <a name="autoscale" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.autoscale"></a>

```typescript
public readonly autoscale: GoogleBigqueryReservationAutoscale;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#autoscale GoogleBigqueryReservation#autoscale}

---

##### `concurrency`<sup>Optional</sup> <a name="concurrency" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

Maximum number of queries that are allowed to run concurrently in this reservation.

This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#concurrency GoogleBigqueryReservation#concurrency}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#edition GoogleBigqueryReservation#edition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#id GoogleBigqueryReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreIdleSlots`<sup>Optional</sup> <a name="ignoreIdleSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.ignoreIdleSlots"></a>

```typescript
public readonly ignoreIdleSlots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If false, any query using this reservation will use idle slots from other reservations within the same admin project.

If true, a query using this reservation will execute with the slot
capacity specified above at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#ignore_idle_slots GoogleBigqueryReservation#ignore_idle_slots}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#location GoogleBigqueryReservation#location}

---

##### `maxSlots`<sup>Optional</sup> <a name="maxSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.maxSlots"></a>

```typescript
public readonly maxSlots: number;
```

- *Type:* number

The overall max slots for the reservation, covering slotCapacity (baseline), idle slots (if ignoreIdleSlots is false) and scaled slots.

If present, the reservation won't use
more than the specified number of slots, even if there is demand and supply (from idle
slots). NOTE: capping a reservation's idle slot usage is best effort and its usage may
exceed the maxSlots value. However, in terms of autoscale.current_slots (which accounts
for the additional added slots), it will never exceed the maxSlots - baseline.

This field must be set together with the scalingMode enum value, otherwise the request
will be rejected with error code google.rpc.Code.INVALID_ARGUMENT.

If the maxSlots and scalingMode are set, the autoscale or autoscale.max_slots field
must be unset. Otherwise the request will be rejected with error code
google.rpc.Code.INVALID_ARGUMENT. However, the autoscale field may still be in the
output. The autopscale.max_slots will always show as 0 and the autoscaler.current_slots
will represent the current slots from autoscaler excluding idle slots. For example,
if the maxSlots is 1000 and scalingMode is AUTOSCALE_ONLY, then in the output, the
autoscaler.max_slots will be 0 and the autoscaler.current_slots may be any value
between 0 and 1000.

If the maxSlots is 1000, scalingMode is ALL_SLOTS, the baseline is 100 and idle slots
usage is 200, then in the output, the autoscaler.max_slots will be 0 and the
autoscaler.current_slots will not be higher than 700.

If the maxSlots is 1000, scalingMode is IDLE_SLOTS_ONLY, then in the output, the
autoscaler field will be null.

If the maxSlots and scalingMode are set, then the ignoreIdleSlots field must be
aligned with the scalingMode enum value.(See details in ScalingMode comments).
Otherwise the request will be rejected with error code google.rpc.Code.INVALID_ARGUMENT.

Please note, the maxSlots is for user to manage the part of slots greater than the
baseline. Therefore, we don't allow users to set maxSlots smaller or equal to the
baseline as it will not be meaningful. If the field is present and
slotCapacity>=maxSlots, requests will be rejected with error code
google.rpc.Code.INVALID_ARGUMENT.

Please note that if maxSlots is set to 0, we will treat it as unset. Customers can set
maxSlots to 0 and set scalingMode to SCALING_MODE_UNSPECIFIED to disable the maxSlots
feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#max_slots GoogleBigqueryReservation#max_slots}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#project GoogleBigqueryReservation#project}.

---

##### `scalingMode`<sup>Optional</sup> <a name="scalingMode" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.scalingMode"></a>

```typescript
public readonly scalingMode: string;
```

- *Type:* string

The scaling mode for the reservation.

If the field is present but maxSlots is not present,
requests will be rejected with error code google.rpc.Code.INVALID_ARGUMENT.

Enum values:

'SCALING_MODE_UNSPECIFIED': Default value of ScalingMode.

'AUTOSCALE_ONLY': The reservation will scale up only using slots from autoscaling. It will
not use any idle slots even if there may be some available. The upper limit that autoscaling
can scale up to will be maxSlots - baseline. For example, if maxSlots is 1000, baseline is 200
and customer sets ScalingMode to AUTOSCALE_ONLY, then autoscalerg will scale up to 800 slots
and no idle slots will be used. Please note, in this mode, the ignoreIdleSlots field must be
set to true. Otherwise the request will be rejected with error code
google.rpc.Code.INVALID_ARGUMENT.

'IDLE_SLOTS_ONLY': The reservation will scale up using only idle slots contributed by other
reservations or from unassigned commitments. If no idle slots are available it will not scale
up further. If the idle slots which it is using are reclaimed by the contributing reservation(s)
it may be forced to scale down. The max idle slots the reservation can be maxSlots - baseline
capacity. For example, if maxSlots is 1000, baseline is 200 and customer sets ScalingMode to
IDLE_SLOTS_ONLY, 1. if there are 1000 idle slots available in other reservations, the
reservation will scale up to 1000 slots with 200 baseline and 800 idle slots. 2. if there are
500 idle slots available in other reservations, the reservation will scale up to 700 slots with
200 baseline and 300 idle slots. Please note, in this mode, the reservation might not be able to
scale up to maxSlots. Please note, in this mode, the ignoreIdleSlots field must be set to false.
Otherwise the request will be rejected with error code google.rpc.Code.INVALID_ARGUMENT

'ALL_SLOTS': The reservation will scale up using all slots available to it. It will use idle slots
contributed by other reservations or from unassigned commitments first. If no idle slots are
available it will scale up using autoscaling. For example, if maxSlots is 1000, baseline is 200
and customer sets ScalingMode to ALL_SLOTS, 1. if there are 800 idle slots available in other
reservations, the reservation will scale up to 1000 slots with 200 baseline and 800 idle slots. 2.
if there are 500 idle slots available in other reservations, the reservation will scale up to 1000
slots with 200 baseline, 500 idle slots and 300 autoscaling slots. 3. if there are no idle slots
available in other reservations, it will scale up to 1000 slots with 200 baseline and 800
autoscaling slots. Please note, in this mode, the ignoreIdleSlots field must be set to false.
Otherwise the request will be rejected with error code google.rpc.Code.INVALID_ARGUMENT. Possible values: ["SCALING_MODE_UNSPECIFIED", "AUTOSCALE_ONLY", "IDLE_SLOTS_ONLY", "ALL_SLOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#scaling_mode GoogleBigqueryReservation#scaling_mode}

---

##### `secondaryLocation`<sup>Optional</sup> <a name="secondaryLocation" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.secondaryLocation"></a>

```typescript
public readonly secondaryLocation: string;
```

- *Type:* string

The current location of the reservation's secondary replica.

This field is only set for
reservations using the managed disaster recovery feature. Users can set this in create
reservation calls to create a failover reservation or in update reservation calls to convert
a non-failover reservation to a failover reservation(or vice versa).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#secondary_location GoogleBigqueryReservation#secondary_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryReservationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#timeouts GoogleBigqueryReservation#timeouts}

---

### GoogleBigqueryReservationReplicationStatus <a name="GoogleBigqueryReservationReplicationStatus" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatus.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

const googleBigqueryReservationReplicationStatus: googleBigqueryReservation.GoogleBigqueryReservationReplicationStatus = { ... }
```


### GoogleBigqueryReservationReplicationStatusError <a name="GoogleBigqueryReservationReplicationStatusError" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusError.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

const googleBigqueryReservationReplicationStatusError: googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusError = { ... }
```


### GoogleBigqueryReservationTimeouts <a name="GoogleBigqueryReservationTimeouts" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

const googleBigqueryReservationTimeouts: googleBigqueryReservation.GoogleBigqueryReservationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#create GoogleBigqueryReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#delete GoogleBigqueryReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#update GoogleBigqueryReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#create GoogleBigqueryReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#delete GoogleBigqueryReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_bigquery_reservation#update GoogleBigqueryReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryReservationAutoscaleOutputReference <a name="GoogleBigqueryReservationAutoscaleOutputReference" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

new googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resetMaxSlots">resetMaxSlots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxSlots` <a name="resetMaxSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.resetMaxSlots"></a>

```typescript
public resetMaxSlots(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.currentSlots">currentSlots</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.maxSlotsInput">maxSlotsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.maxSlots">maxSlots</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentSlots`<sup>Required</sup> <a name="currentSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.currentSlots"></a>

```typescript
public readonly currentSlots: number;
```

- *Type:* number

---

##### `maxSlotsInput`<sup>Optional</sup> <a name="maxSlotsInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.maxSlotsInput"></a>

```typescript
public readonly maxSlotsInput: number;
```

- *Type:* number

---

##### `maxSlots`<sup>Required</sup> <a name="maxSlots" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.maxSlots"></a>

```typescript
public readonly maxSlots: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryReservationAutoscale;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationAutoscale">GoogleBigqueryReservationAutoscale</a>

---


### GoogleBigqueryReservationReplicationStatusErrorList <a name="GoogleBigqueryReservationReplicationStatusErrorList" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

new googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.get"></a>

```typescript
public get(index: number): GoogleBigqueryReservationReplicationStatusErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBigqueryReservationReplicationStatusErrorOutputReference <a name="GoogleBigqueryReservationReplicationStatusErrorOutputReference" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

new googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusError">GoogleBigqueryReservationReplicationStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryReservationReplicationStatusError;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusError">GoogleBigqueryReservationReplicationStatusError</a>

---


### GoogleBigqueryReservationReplicationStatusList <a name="GoogleBigqueryReservationReplicationStatusList" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

new googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.get"></a>

```typescript
public get(index: number): GoogleBigqueryReservationReplicationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBigqueryReservationReplicationStatusOutputReference <a name="GoogleBigqueryReservationReplicationStatusOutputReference" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

new googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList">GoogleBigqueryReservationReplicationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.lastErrorTime">lastErrorTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.lastReplicationTime">lastReplicationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatus">GoogleBigqueryReservationReplicationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.error"></a>

```typescript
public readonly error: GoogleBigqueryReservationReplicationStatusErrorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusErrorList">GoogleBigqueryReservationReplicationStatusErrorList</a>

---

##### `lastErrorTime`<sup>Required</sup> <a name="lastErrorTime" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.lastErrorTime"></a>

```typescript
public readonly lastErrorTime: string;
```

- *Type:* string

---

##### `lastReplicationTime`<sup>Required</sup> <a name="lastReplicationTime" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.lastReplicationTime"></a>

```typescript
public readonly lastReplicationTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryReservationReplicationStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationReplicationStatus">GoogleBigqueryReservationReplicationStatus</a>

---


### GoogleBigqueryReservationTimeoutsOutputReference <a name="GoogleBigqueryReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryReservation } from '@cdktf/provider-google-beta'

new googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryReservationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryReservation.GoogleBigqueryReservationTimeouts">GoogleBigqueryReservationTimeouts</a>

---



