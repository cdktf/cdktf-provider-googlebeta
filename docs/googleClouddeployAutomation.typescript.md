# `googleClouddeployAutomation` Submodule <a name="`googleClouddeployAutomation` Submodule" id="@cdktf/provider-google-beta.googleClouddeployAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployAutomation <a name="GoogleClouddeployAutomation" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation google_clouddeploy_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomation(scope: Construct, id: string, config: GoogleClouddeployAutomationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig">GoogleClouddeployAutomationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig">GoogleClouddeployAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleClouddeployAutomationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>[]

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector"></a>

```typescript
public putSelector(value: GoogleClouddeployAutomationSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleClouddeployAutomationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetSuspended"></a>

```typescript
public resetSuspended(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleClouddeployAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList">GoogleClouddeployAutomationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference">GoogleClouddeployAutomationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference">GoogleClouddeployAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipelineInput">deliveryPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selectorInput">selectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspendedInput">suspendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipeline">deliveryPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rules"></a>

```typescript
public readonly rules: GoogleClouddeployAutomationRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList">GoogleClouddeployAutomationRulesList</a>

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selector"></a>

```typescript
public readonly selector: GoogleClouddeployAutomationSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference">GoogleClouddeployAutomationSelectorOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleClouddeployAutomationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference">GoogleClouddeployAutomationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deliveryPipelineInput`<sup>Optional</sup> <a name="deliveryPipelineInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipelineInput"></a>

```typescript
public readonly deliveryPipelineInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleClouddeployAutomationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>[]

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.selectorInput"></a>

```typescript
public readonly selectorInput: GoogleClouddeployAutomationSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspendedInput"></a>

```typescript
public readonly suspendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleClouddeployAutomationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deliveryPipeline`<sup>Required</sup> <a name="deliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.deliveryPipeline"></a>

```typescript
public readonly deliveryPipeline: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployAutomationConfig <a name="GoogleClouddeployAutomationConfig" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

const googleClouddeployAutomationConfig: googleClouddeployAutomation.GoogleClouddeployAutomationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.deliveryPipeline">deliveryPipeline</a></code> | <code>string</code> | The delivery_pipeline for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.name">name</a></code> | <code>string</code> | Name of the 'Automation'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the 'Automation'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.suspended">suspended</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. When Suspended, automation is deactivated from execution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deliveryPipeline`<sup>Required</sup> <a name="deliveryPipeline" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.deliveryPipeline"></a>

```typescript
public readonly deliveryPipeline: string;
```

- *Type:* string

The delivery_pipeline for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#delivery_pipeline GoogleClouddeployAutomation#delivery_pipeline}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#location GoogleClouddeployAutomation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the 'Automation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#name GoogleClouddeployAutomation#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleClouddeployAutomationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#rules GoogleClouddeployAutomation#rules}

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.selector"></a>

```typescript
public readonly selector: GoogleClouddeployAutomationSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#selector GoogleClouddeployAutomation#selector}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#service_account GoogleClouddeployAutomation#service_account}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#annotations GoogleClouddeployAutomation#annotations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the 'Automation'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#description GoogleClouddeployAutomation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#project GoogleClouddeployAutomation#project}.

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.suspended"></a>

```typescript
public readonly suspended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. When Suspended, automation is deactivated from execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#suspended GoogleClouddeployAutomation#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleClouddeployAutomationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#timeouts GoogleClouddeployAutomation#timeouts}

---

### GoogleClouddeployAutomationRules <a name="GoogleClouddeployAutomationRules" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

const googleClouddeployAutomationRules: googleClouddeployAutomation.GoogleClouddeployAutomationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.advanceRolloutRule">advanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | advance_rollout_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.promoteReleaseRule">promoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | promote_release_rule block. |

---

##### `advanceRolloutRule`<sup>Optional</sup> <a name="advanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.advanceRolloutRule"></a>

```typescript
public readonly advanceRolloutRule: GoogleClouddeployAutomationRulesAdvanceRolloutRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

advance_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#advance_rollout_rule GoogleClouddeployAutomation#advance_rollout_rule}

---

##### `promoteReleaseRule`<sup>Optional</sup> <a name="promoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules.property.promoteReleaseRule"></a>

```typescript
public readonly promoteReleaseRule: GoogleClouddeployAutomationRulesPromoteReleaseRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#promote_release_rule GoogleClouddeployAutomation#promote_release_rule}

---

### GoogleClouddeployAutomationRulesAdvanceRolloutRule <a name="GoogleClouddeployAutomationRulesAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

const googleClouddeployAutomationRulesAdvanceRolloutRule: googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.id">id</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases">sourcePhases</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.wait">wait</a></code> | <code>string</code> | Optional. How long to wait after a rollout is finished. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourcePhases`<sup>Optional</sup> <a name="sourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases"></a>

```typescript
public readonly sourcePhases: string[];
```

- *Type:* string[]

Optional.

Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#source_phases GoogleClouddeployAutomation#source_phases}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule.property.wait"></a>

```typescript
public readonly wait: string;
```

- *Type:* string

Optional. How long to wait after a rollout is finished.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}

---

### GoogleClouddeployAutomationRulesPromoteReleaseRule <a name="GoogleClouddeployAutomationRulesPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

const googleClouddeployAutomationRulesPromoteReleaseRule: googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.id">id</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase">destinationPhase</a></code> | <code>string</code> | Optional. The starting phase of the rollout created by this operation. Default to the first phase. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId">destinationTargetId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.wait">wait</a></code> | <code>string</code> | Optional. How long the release need to be paused until being promoted to the next target. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `destinationPhase`<sup>Optional</sup> <a name="destinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase"></a>

```typescript
public readonly destinationPhase: string;
```

- *Type:* string

Optional. The starting phase of the rollout created by this operation. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#destination_phase GoogleClouddeployAutomation#destination_phase}

---

##### `destinationTargetId`<sup>Optional</sup> <a name="destinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId"></a>

```typescript
public readonly destinationTargetId: string;
```

- *Type:* string

Optional.

The ID of the stage in the pipeline to which this 'Release' is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#destination_target_id GoogleClouddeployAutomation#destination_target_id}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule.property.wait"></a>

```typescript
public readonly wait: string;
```

- *Type:* string

Optional. How long the release need to be paused until being promoted to the next target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#wait GoogleClouddeployAutomation#wait}

---

### GoogleClouddeployAutomationSelector <a name="GoogleClouddeployAutomationSelector" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

const googleClouddeployAutomationSelector: googleClouddeployAutomation.GoogleClouddeployAutomationSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.property.targets">targets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>[]</code> | targets block. |

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector.property.targets"></a>

```typescript
public readonly targets: IResolvable | GoogleClouddeployAutomationSelectorTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#targets GoogleClouddeployAutomation#targets}

---

### GoogleClouddeployAutomationSelectorTargets <a name="GoogleClouddeployAutomationSelectorTargets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

const googleClouddeployAutomationSelectorTargets: googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.id">id</a></code> | <code>string</code> | ID of the 'Target'. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Target labels. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the 'Target'.

The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#id GoogleClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Target labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#labels GoogleClouddeployAutomation#labels}

---

### GoogleClouddeployAutomationTimeouts <a name="GoogleClouddeployAutomationTimeouts" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

const googleClouddeployAutomationTimeouts: googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#create GoogleClouddeployAutomation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#delete GoogleClouddeployAutomation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#update GoogleClouddeployAutomation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#create GoogleClouddeployAutomation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#delete GoogleClouddeployAutomation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_clouddeploy_automation#update GoogleClouddeployAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference <a name="GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases">resetSourcePhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait">resetWait</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourcePhases` <a name="resetSourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases"></a>

```typescript
public resetSourcePhases(): void
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait"></a>

```typescript
public resetWait(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput">sourcePhasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput">waitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases">sourcePhases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait">wait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sourcePhasesInput`<sup>Optional</sup> <a name="sourcePhasesInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput"></a>

```typescript
public readonly sourcePhasesInput: string[];
```

- *Type:* string[]

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput"></a>

```typescript
public readonly waitInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourcePhases`<sup>Required</sup> <a name="sourcePhases" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases"></a>

```typescript
public readonly sourcePhases: string[];
```

- *Type:* string[]

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait"></a>

```typescript
public readonly wait: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployAutomationRulesAdvanceRolloutRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---


### GoogleClouddeployAutomationRulesList <a name="GoogleClouddeployAutomationRulesList" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get"></a>

```typescript
public get(index: number): GoogleClouddeployAutomationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployAutomationRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>[]

---


### GoogleClouddeployAutomationRulesOutputReference <a name="GoogleClouddeployAutomationRulesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule">putAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule">putPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule">resetAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule">resetPromoteReleaseRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvanceRolloutRule` <a name="putAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule"></a>

```typescript
public putAdvanceRolloutRule(value: GoogleClouddeployAutomationRulesAdvanceRolloutRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `putPromoteReleaseRule` <a name="putPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule"></a>

```typescript
public putPromoteReleaseRule(value: GoogleClouddeployAutomationRulesPromoteReleaseRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `resetAdvanceRolloutRule` <a name="resetAdvanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule"></a>

```typescript
public resetAdvanceRolloutRule(): void
```

##### `resetPromoteReleaseRule` <a name="resetPromoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule"></a>

```typescript
public resetPromoteReleaseRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRule">advanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRule">promoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput">advanceRolloutRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput">promoteReleaseRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advanceRolloutRule`<sup>Required</sup> <a name="advanceRolloutRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRule"></a>

```typescript
public readonly advanceRolloutRule: GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">GoogleClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a>

---

##### `promoteReleaseRule`<sup>Required</sup> <a name="promoteReleaseRule" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRule"></a>

```typescript
public readonly promoteReleaseRule: GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference">GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a>

---

##### `advanceRolloutRuleInput`<sup>Optional</sup> <a name="advanceRolloutRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput"></a>

```typescript
public readonly advanceRolloutRuleInput: GoogleClouddeployAutomationRulesAdvanceRolloutRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesAdvanceRolloutRule">GoogleClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `promoteReleaseRuleInput`<sup>Optional</sup> <a name="promoteReleaseRuleInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput"></a>

```typescript
public readonly promoteReleaseRuleInput: GoogleClouddeployAutomationRulesPromoteReleaseRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployAutomationRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRules">GoogleClouddeployAutomationRules</a>

---


### GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference <a name="GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase">resetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId">resetDestinationTargetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait">resetWait</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPhase` <a name="resetDestinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```typescript
public resetDestinationPhase(): void
```

##### `resetDestinationTargetId` <a name="resetDestinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```typescript
public resetDestinationTargetId(): void
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait"></a>

```typescript
public resetWait(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput">destinationPhaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">destinationTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput">waitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase">destinationPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId">destinationTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait">wait</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPhaseInput`<sup>Optional</sup> <a name="destinationPhaseInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```typescript
public readonly destinationPhaseInput: string;
```

- *Type:* string

---

##### `destinationTargetIdInput`<sup>Optional</sup> <a name="destinationTargetIdInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```typescript
public readonly destinationTargetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput"></a>

```typescript
public readonly waitInput: string;
```

- *Type:* string

---

##### `destinationPhase`<sup>Required</sup> <a name="destinationPhase" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```typescript
public readonly destinationPhase: string;
```

- *Type:* string

---

##### `destinationTargetId`<sup>Required</sup> <a name="destinationTargetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```typescript
public readonly destinationTargetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait"></a>

```typescript
public readonly wait: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployAutomationRulesPromoteReleaseRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationRulesPromoteReleaseRule">GoogleClouddeployAutomationRulesPromoteReleaseRule</a>

---


### GoogleClouddeployAutomationSelectorOutputReference <a name="GoogleClouddeployAutomationSelectorOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets">putTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets"></a>

```typescript
public putTargets(value: IResolvable | GoogleClouddeployAutomationSelectorTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList">GoogleClouddeployAutomationSelectorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targets"></a>

```typescript
public readonly targets: GoogleClouddeployAutomationSelectorTargetsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList">GoogleClouddeployAutomationSelectorTargetsList</a>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | GoogleClouddeployAutomationSelectorTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployAutomationSelector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelector">GoogleClouddeployAutomationSelector</a>

---


### GoogleClouddeployAutomationSelectorTargetsList <a name="GoogleClouddeployAutomationSelectorTargetsList" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get"></a>

```typescript
public get(index: number): GoogleClouddeployAutomationSelectorTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployAutomationSelectorTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>[]

---


### GoogleClouddeployAutomationSelectorTargetsOutputReference <a name="GoogleClouddeployAutomationSelectorTargetsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployAutomationSelectorTargets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationSelectorTargets">GoogleClouddeployAutomationSelectorTargets</a>

---


### GoogleClouddeployAutomationTimeoutsOutputReference <a name="GoogleClouddeployAutomationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployAutomation } from '@cdktf/provider-google-beta'

new googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployAutomationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployAutomation.GoogleClouddeployAutomationTimeouts">GoogleClouddeployAutomationTimeouts</a>

---



