# `googleDataplexAspectTypeIamMember` Submodule <a name="`googleDataplexAspectTypeIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexAspectTypeIamMember <a name="GoogleDataplexAspectTypeIamMember" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member google_dataplex_aspect_type_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer"></a>

```typescript
import { googleDataplexAspectTypeIamMember } from '@cdktf/provider-google-beta'

new googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember(scope: Construct, id: string, config: GoogleDataplexAspectTypeIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig">GoogleDataplexAspectTypeIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig">GoogleDataplexAspectTypeIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleDataplexAspectTypeIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexAspectTypeIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isConstruct"></a>

```typescript
import { googleDataplexAspectTypeIamMember } from '@cdktf/provider-google-beta'

googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformElement"></a>

```typescript
import { googleDataplexAspectTypeIamMember } from '@cdktf/provider-google-beta'

googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformResource"></a>

```typescript
import { googleDataplexAspectTypeIamMember } from '@cdktf/provider-google-beta'

googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport"></a>

```typescript
import { googleDataplexAspectTypeIamMember } from '@cdktf/provider-google-beta'

googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataplexAspectTypeIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexAspectTypeIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexAspectTypeIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexAspectTypeIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference">GoogleDataplexAspectTypeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.aspectTypeIdInput">aspectTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.aspectTypeId">aspectTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleDataplexAspectTypeIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference">GoogleDataplexAspectTypeIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `aspectTypeIdInput`<sup>Optional</sup> <a name="aspectTypeIdInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.aspectTypeIdInput"></a>

```typescript
public readonly aspectTypeIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleDataplexAspectTypeIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `aspectTypeId`<sup>Required</sup> <a name="aspectTypeId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.aspectTypeId"></a>

```typescript
public readonly aspectTypeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexAspectTypeIamMemberCondition <a name="GoogleDataplexAspectTypeIamMemberCondition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.Initializer"></a>

```typescript
import { googleDataplexAspectTypeIamMember } from '@cdktf/provider-google-beta'

const googleDataplexAspectTypeIamMemberCondition: googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#expression GoogleDataplexAspectTypeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#title GoogleDataplexAspectTypeIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#description GoogleDataplexAspectTypeIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#expression GoogleDataplexAspectTypeIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#title GoogleDataplexAspectTypeIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#description GoogleDataplexAspectTypeIamMember#description}.

---

### GoogleDataplexAspectTypeIamMemberConfig <a name="GoogleDataplexAspectTypeIamMemberConfig" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.Initializer"></a>

```typescript
import { googleDataplexAspectTypeIamMember } from '@cdktf/provider-google-beta'

const googleDataplexAspectTypeIamMemberConfig: googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.aspectTypeId">aspectTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#aspect_type_id GoogleDataplexAspectTypeIamMember#aspect_type_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#member GoogleDataplexAspectTypeIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#role GoogleDataplexAspectTypeIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#id GoogleDataplexAspectTypeIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#location GoogleDataplexAspectTypeIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#project GoogleDataplexAspectTypeIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aspectTypeId`<sup>Required</sup> <a name="aspectTypeId" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.aspectTypeId"></a>

```typescript
public readonly aspectTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#aspect_type_id GoogleDataplexAspectTypeIamMember#aspect_type_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#member GoogleDataplexAspectTypeIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#role GoogleDataplexAspectTypeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleDataplexAspectTypeIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#condition GoogleDataplexAspectTypeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#id GoogleDataplexAspectTypeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#location GoogleDataplexAspectTypeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_aspect_type_iam_member#project GoogleDataplexAspectTypeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexAspectTypeIamMemberConditionOutputReference <a name="GoogleDataplexAspectTypeIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleDataplexAspectTypeIamMember } from '@cdktf/provider-google-beta'

new googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexAspectTypeIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexAspectTypeIamMember.GoogleDataplexAspectTypeIamMemberCondition">GoogleDataplexAspectTypeIamMemberCondition</a>

---



