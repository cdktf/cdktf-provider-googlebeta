# `googleNetworkSecuritySecurityProfile` Submodule <a name="`googleNetworkSecuritySecurityProfile` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySecurityProfile <a name="GoogleNetworkSecuritySecurityProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile google_network_security_security_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile(scope: Construct, id: string, config: GoogleNetworkSecuritySecurityProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig">GoogleNetworkSecuritySecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig">GoogleNetworkSecuritySecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile">putThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetThreatPreventionProfile">resetThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putThreatPreventionProfile` <a name="putThreatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile"></a>

```typescript
public putThreatPreventionProfile(value: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecuritySecurityProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetThreatPreventionProfile` <a name="resetThreatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetThreatPreventionProfile"></a>

```typescript
public resetThreatPreventionProfile(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecuritySecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecuritySecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfileInput">threatPreventionProfileInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `threatPreventionProfile`<sup>Required</sup> <a name="threatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfile"></a>

```typescript
public readonly threatPreventionProfile: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference">GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `threatPreventionProfileInput`<sup>Optional</sup> <a name="threatPreventionProfileInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.threatPreventionProfileInput"></a>

```typescript
public readonly threatPreventionProfileInput: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecuritySecurityProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySecurityProfileConfig <a name="GoogleNetworkSecuritySecurityProfileConfig" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

const googleNetworkSecuritySecurityProfileConfig: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the security profile resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.type">type</a></code> | <code>string</code> | The type of security profile. Possible values: ["THREAT_PREVENTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.description">description</a></code> | <code>string</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.location">location</a></code> | <code>string</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.parent">parent</a></code> | <code>string</code> | The name of the parent this security profile belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#name GoogleNetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of security profile. Possible values: ["THREAT_PREVENTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#type GoogleNetworkSecuritySecurityProfile#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#description GoogleNetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#id GoogleNetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#labels GoogleNetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#location GoogleNetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The name of the parent this security profile belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#parent GoogleNetworkSecuritySecurityProfile#parent}

---

##### `threatPreventionProfile`<sup>Optional</sup> <a name="threatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.threatPreventionProfile"></a>

```typescript
public readonly threatPreventionProfile: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#threat_prevention_profile GoogleNetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecuritySecurityProfileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#timeouts GoogleNetworkSecuritySecurityProfile#timeouts}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfile <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfile" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

const googleNetworkSecuritySecurityProfileThreatPreventionProfile: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides">severityOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | severity_overrides block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides">threatOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | threat_overrides block. |

---

##### `severityOverrides`<sup>Optional</sup> <a name="severityOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides"></a>

```typescript
public readonly severityOverrides: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#severity_overrides GoogleNetworkSecuritySecurityProfile#severity_overrides}

---

##### `threatOverrides`<sup>Optional</sup> <a name="threatOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides"></a>

```typescript
public readonly threatOverrides: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#threat_overrides GoogleNetworkSecuritySecurityProfile#threat_overrides}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

const googleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action">action</a></code> | <code>string</code> | Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity">severity</a></code> | <code>string</code> | Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#severity GoogleNetworkSecuritySecurityProfile#severity}

---

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

const googleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action">action</a></code> | <code>string</code> | Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId">threatId</a></code> | <code>string</code> | Vendor-specific ID of a threat to override. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#action GoogleNetworkSecuritySecurityProfile#action}

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId"></a>

```typescript
public readonly threatId: string;
```

- *Type:* string

Vendor-specific ID of a threat to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#threat_id GoogleNetworkSecuritySecurityProfile#threat_id}

---

### GoogleNetworkSecuritySecurityProfileTimeouts <a name="GoogleNetworkSecuritySecurityProfileTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

const googleNetworkSecuritySecurityProfileTimeouts: googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#create GoogleNetworkSecuritySecurityProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#delete GoogleNetworkSecuritySecurityProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_network_security_security_profile#update GoogleNetworkSecuritySecurityProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides">putSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides">putThreatOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides">resetSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides">resetThreatOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSeverityOverrides` <a name="putSeverityOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides"></a>

```typescript
public putSeverityOverrides(value: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---

##### `putThreatOverrides` <a name="putThreatOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides"></a>

```typescript
public putThreatOverrides(value: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---

##### `resetSeverityOverrides` <a name="resetSeverityOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides"></a>

```typescript
public resetSeverityOverrides(): void
```

##### `resetThreatOverrides` <a name="resetThreatOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides"></a>

```typescript
public resetThreatOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides">severityOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides">threatOverrides</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput">severityOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput">threatOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `severityOverrides`<sup>Required</sup> <a name="severityOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides"></a>

```typescript
public readonly severityOverrides: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a>

---

##### `threatOverrides`<sup>Required</sup> <a name="threatOverrides" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides"></a>

```typescript
public readonly threatOverrides: GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a>

---

##### `severityOverridesInput`<sup>Optional</sup> <a name="severityOverridesInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput"></a>

```typescript
public readonly severityOverridesInput: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---

##### `threatOverridesInput`<sup>Optional</sup> <a name="threatOverridesInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput"></a>

```typescript
public readonly threatOverridesInput: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfile">GoogleNetworkSecuritySecurityProfileThreatPreventionProfile</a>

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get"></a>

```typescript
public get(index: number): GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---


### GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference <a name="GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput">threatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId">threatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `threatIdInput`<sup>Optional</sup> <a name="threatIdInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput"></a>

```typescript
public readonly threatIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId"></a>

```typescript
public readonly threatId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">GoogleNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>

---


### GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference <a name="GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecuritySecurityProfile } from '@cdktf/provider-google-beta'

new googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecuritySecurityProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecuritySecurityProfile.GoogleNetworkSecuritySecurityProfileTimeouts">GoogleNetworkSecuritySecurityProfileTimeouts</a>

---



