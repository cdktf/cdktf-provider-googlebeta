# `googleBigqueryReservationAssignment` Submodule <a name="`googleBigqueryReservationAssignment` Submodule" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryReservationAssignment <a name="GoogleBigqueryReservationAssignment" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment google_bigquery_reservation_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.Initializer"></a>

```typescript
import { googleBigqueryReservationAssignment } from '@cdktf/provider-google-beta'

new googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment(scope: Construct, id: string, config: GoogleBigqueryReservationAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig">GoogleBigqueryReservationAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig">GoogleBigqueryReservationAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryReservationAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts">GoogleBigqueryReservationAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryReservationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isConstruct"></a>

```typescript
import { googleBigqueryReservationAssignment } from '@cdktf/provider-google-beta'

googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isTerraformElement"></a>

```typescript
import { googleBigqueryReservationAssignment } from '@cdktf/provider-google-beta'

googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isTerraformResource"></a>

```typescript
import { googleBigqueryReservationAssignment } from '@cdktf/provider-google-beta'

googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.generateConfigForImport"></a>

```typescript
import { googleBigqueryReservationAssignment } from '@cdktf/provider-google-beta'

googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryReservationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryReservationAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryReservationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryReservationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference">GoogleBigqueryReservationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.assigneeInput">assigneeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.jobTypeInput">jobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.reservationInput">reservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts">GoogleBigqueryReservationAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.assignee">assignee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.jobType">jobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.reservation">reservation</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryReservationAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference">GoogleBigqueryReservationAssignmentTimeoutsOutputReference</a>

---

##### `assigneeInput`<sup>Optional</sup> <a name="assigneeInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.assigneeInput"></a>

```typescript
public readonly assigneeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.jobTypeInput"></a>

```typescript
public readonly jobTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reservationInput`<sup>Optional</sup> <a name="reservationInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.reservationInput"></a>

```typescript
public readonly reservationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryReservationAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts">GoogleBigqueryReservationAssignmentTimeouts</a>

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.assignee"></a>

```typescript
public readonly assignee: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.reservation"></a>

```typescript
public readonly reservation: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryReservationAssignmentConfig <a name="GoogleBigqueryReservationAssignmentConfig" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.Initializer"></a>

```typescript
import { googleBigqueryReservationAssignment } from '@cdktf/provider-google-beta'

const googleBigqueryReservationAssignmentConfig: googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.assignee">assignee</a></code> | <code>string</code> | The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.jobType">jobType</a></code> | <code>string</code> | Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.reservation">reservation</a></code> | <code>string</code> | The reservation for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#id GoogleBigqueryReservationAssignment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#project GoogleBigqueryReservationAssignment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts">GoogleBigqueryReservationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.assignee"></a>

```typescript
public readonly assignee: string;
```

- *Type:* string

The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#assignee GoogleBigqueryReservationAssignment#assignee}

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#job_type GoogleBigqueryReservationAssignment#job_type}

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.reservation"></a>

```typescript
public readonly reservation: string;
```

- *Type:* string

The reservation for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#reservation GoogleBigqueryReservationAssignment#reservation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#id GoogleBigqueryReservationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#location GoogleBigqueryReservationAssignment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#project GoogleBigqueryReservationAssignment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryReservationAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts">GoogleBigqueryReservationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#timeouts GoogleBigqueryReservationAssignment#timeouts}

---

### GoogleBigqueryReservationAssignmentTimeouts <a name="GoogleBigqueryReservationAssignmentTimeouts" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts.Initializer"></a>

```typescript
import { googleBigqueryReservationAssignment } from '@cdktf/provider-google-beta'

const googleBigqueryReservationAssignmentTimeouts: googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#create GoogleBigqueryReservationAssignment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#delete GoogleBigqueryReservationAssignment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#create GoogleBigqueryReservationAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_bigquery_reservation_assignment#delete GoogleBigqueryReservationAssignment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryReservationAssignmentTimeoutsOutputReference <a name="GoogleBigqueryReservationAssignmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryReservationAssignment } from '@cdktf/provider-google-beta'

new googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts">GoogleBigqueryReservationAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryReservationAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryReservationAssignment.GoogleBigqueryReservationAssignmentTimeouts">GoogleBigqueryReservationAssignmentTimeouts</a>

---



