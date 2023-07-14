# `google_compute_firewall`

Refer to the Terraform Registory for docs: [`google_compute_firewall`](https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall).

# `googleComputeFirewall` Submodule <a name="`googleComputeFirewall` Submodule" id="@cdktf/provider-google-beta.googleComputeFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeFirewall <a name="GoogleComputeFirewall" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall google_compute_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

new googleComputeFirewall.GoogleComputeFirewall(scope: Construct, id: string, config: GoogleComputeFirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig">GoogleComputeFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig">GoogleComputeFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDestinationRanges">resetDestinationRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetSourceRanges">resetSourceRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetSourceServiceAccounts">resetSourceServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetSourceTags">resetSourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetTargetTags">resetTargetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putAllow"></a>

```typescript
public putAllow(value: IResolvable | GoogleComputeFirewallAllow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putAllow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a>[]

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putDeny"></a>

```typescript
public putDeny(value: IResolvable | GoogleComputeFirewallDeny[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putDeny.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a>[]

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putLogConfig"></a>

```typescript
public putLogConfig(value: GoogleComputeFirewallLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig">GoogleComputeFirewallLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeFirewallTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts">GoogleComputeFirewallTimeouts</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDeny"></a>

```typescript
public resetDeny(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationRanges` <a name="resetDestinationRanges" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDestinationRanges"></a>

```typescript
public resetDestinationRanges(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSourceRanges` <a name="resetSourceRanges" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetSourceRanges"></a>

```typescript
public resetSourceRanges(): void
```

##### `resetSourceServiceAccounts` <a name="resetSourceServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetSourceServiceAccounts"></a>

```typescript
public resetSourceServiceAccounts(): void
```

##### `resetSourceTags` <a name="resetSourceTags" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetSourceTags"></a>

```typescript
public resetSourceTags(): void
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetTargetServiceAccounts"></a>

```typescript
public resetTargetServiceAccounts(): void
```

##### `resetTargetTags` <a name="resetTargetTags" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetTargetTags"></a>

```typescript
public resetTargetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isConstruct"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

googleComputeFirewall.GoogleComputeFirewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isTerraformElement"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

googleComputeFirewall.GoogleComputeFirewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isTerraformResource"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

googleComputeFirewall.GoogleComputeFirewall.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList">GoogleComputeFirewallAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList">GoogleComputeFirewallDenyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference">GoogleComputeFirewallLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference">GoogleComputeFirewallTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.allowInput">allowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.denyInput">denyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.destinationRangesInput">destinationRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig">GoogleComputeFirewallLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceRangesInput">sourceRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceServiceAccountsInput">sourceServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceTagsInput">sourceTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.targetTagsInput">targetTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts">GoogleComputeFirewallTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.destinationRanges">destinationRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceRanges">sourceRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceServiceAccounts">sourceServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceTags">sourceTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.targetTags">targetTags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.allow"></a>

```typescript
public readonly allow: GoogleComputeFirewallAllowList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList">GoogleComputeFirewallAllowList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.deny"></a>

```typescript
public readonly deny: GoogleComputeFirewallDenyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList">GoogleComputeFirewallDenyList</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleComputeFirewallLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference">GoogleComputeFirewallLogConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeFirewallTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference">GoogleComputeFirewallTimeoutsOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.allowInput"></a>

```typescript
public readonly allowInput: IResolvable | GoogleComputeFirewallAllow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a>[]

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.denyInput"></a>

```typescript
public readonly denyInput: IResolvable | GoogleComputeFirewallDeny[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationRangesInput`<sup>Optional</sup> <a name="destinationRangesInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.destinationRangesInput"></a>

```typescript
public readonly destinationRangesInput: string[];
```

- *Type:* string[]

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: GoogleComputeFirewallLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig">GoogleComputeFirewallLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sourceRangesInput`<sup>Optional</sup> <a name="sourceRangesInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceRangesInput"></a>

```typescript
public readonly sourceRangesInput: string[];
```

- *Type:* string[]

---

##### `sourceServiceAccountsInput`<sup>Optional</sup> <a name="sourceServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceServiceAccountsInput"></a>

```typescript
public readonly sourceServiceAccountsInput: string[];
```

- *Type:* string[]

---

##### `sourceTagsInput`<sup>Optional</sup> <a name="sourceTagsInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceTagsInput"></a>

```typescript
public readonly sourceTagsInput: string[];
```

- *Type:* string[]

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.targetServiceAccountsInput"></a>

```typescript
public readonly targetServiceAccountsInput: string[];
```

- *Type:* string[]

---

##### `targetTagsInput`<sup>Optional</sup> <a name="targetTagsInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.targetTagsInput"></a>

```typescript
public readonly targetTagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeFirewallTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts">GoogleComputeFirewallTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationRanges`<sup>Required</sup> <a name="destinationRanges" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.destinationRanges"></a>

```typescript
public readonly destinationRanges: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `sourceRanges`<sup>Required</sup> <a name="sourceRanges" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceRanges"></a>

```typescript
public readonly sourceRanges: string[];
```

- *Type:* string[]

---

##### `sourceServiceAccounts`<sup>Required</sup> <a name="sourceServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceServiceAccounts"></a>

```typescript
public readonly sourceServiceAccounts: string[];
```

- *Type:* string[]

---

##### `sourceTags`<sup>Required</sup> <a name="sourceTags" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.sourceTags"></a>

```typescript
public readonly sourceTags: string[];
```

- *Type:* string[]

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

---

##### `targetTags`<sup>Required</sup> <a name="targetTags" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.targetTags"></a>

```typescript
public readonly targetTags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeFirewallAllow <a name="GoogleComputeFirewallAllow" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

const googleComputeFirewallAllow: googleComputeFirewall.GoogleComputeFirewallAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow.property.protocol">protocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow.property.ports">ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#protocol GoogleComputeFirewall#protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#ports GoogleComputeFirewall#ports}

---

### GoogleComputeFirewallConfig <a name="GoogleComputeFirewallConfig" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

const googleComputeFirewallConfig: googleComputeFirewall.GoogleComputeFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.network">network</a></code> | <code>string</code> | The name or self_link of the network to attach this firewall to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.allow">allow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a>[]</code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.deny">deny</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a>[]</code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.destinationRanges">destinationRanges</a></code> | <code>string[]</code> | If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.direction">direction</a></code> | <code>string</code> | Direction of traffic to which this firewall applies; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field denotes whether to enable logging for a particular firewall rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#id GoogleComputeFirewall#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig">GoogleComputeFirewallLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.priority">priority</a></code> | <code>number</code> | Priority for this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#project GoogleComputeFirewall#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.sourceRanges">sourceRanges</a></code> | <code>string[]</code> | If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.sourceServiceAccounts">sourceServiceAccounts</a></code> | <code>string[]</code> | If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.sourceTags">sourceTags</a></code> | <code>string[]</code> | If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.targetTags">targetTags</a></code> | <code>string[]</code> | A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts">GoogleComputeFirewallTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#name GoogleComputeFirewall#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name or self_link of the network to attach this firewall to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#network GoogleComputeFirewall#network}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.allow"></a>

```typescript
public readonly allow: IResolvable | GoogleComputeFirewallAllow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a>[]

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#allow GoogleComputeFirewall#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.deny"></a>

```typescript
public readonly deny: IResolvable | GoogleComputeFirewallDeny[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a>[]

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#deny GoogleComputeFirewall#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#description GoogleComputeFirewall#description}

---

##### `destinationRanges`<sup>Optional</sup> <a name="destinationRanges" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.destinationRanges"></a>

```typescript
public readonly destinationRanges: string[];
```

- *Type:* string[]

If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges.

These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#destination_ranges GoogleComputeFirewall#destination_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction of traffic to which this firewall applies;

default is
INGRESS. Note: For INGRESS traffic, one of 'source_ranges',
'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#direction GoogleComputeFirewall#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#disabled GoogleComputeFirewall#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field denotes whether to enable logging for a particular firewall rule.

If logging is enabled, logs will be exported to Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#enable_logging GoogleComputeFirewall#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#id GoogleComputeFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleComputeFirewallLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig">GoogleComputeFirewallLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#log_config GoogleComputeFirewall#log_config}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority for this rule.

This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#priority GoogleComputeFirewall#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#project GoogleComputeFirewall#project}.

---

##### `sourceRanges`<sup>Optional</sup> <a name="sourceRanges" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.sourceRanges"></a>

```typescript
public readonly sourceRanges: string[];
```

- *Type:* string[]

If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges.

These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#source_ranges GoogleComputeFirewall#source_ranges}

---

##### `sourceServiceAccounts`<sup>Optional</sup> <a name="sourceServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.sourceServiceAccounts"></a>

```typescript
public readonly sourceServiceAccounts: string[];
```

- *Type:* string[]

If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list.

Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#source_service_accounts GoogleComputeFirewall#source_service_accounts}

---

##### `sourceTags`<sup>Optional</sup> <a name="sourceTags" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.sourceTags"></a>

```typescript
public readonly sourceTags: string[];
```

- *Type:* string[]

If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags.

Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#source_tags GoogleComputeFirewall#source_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[].

targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#target_service_accounts GoogleComputeFirewall#target_service_accounts}

---

##### `targetTags`<sup>Optional</sup> <a name="targetTags" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.targetTags"></a>

```typescript
public readonly targetTags: string[];
```

- *Type:* string[]

A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[].

If no targetTags are specified, the firewall rule applies to all
instances on the specified network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#target_tags GoogleComputeFirewall#target_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeFirewallTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts">GoogleComputeFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#timeouts GoogleComputeFirewall#timeouts}

---

### GoogleComputeFirewallDeny <a name="GoogleComputeFirewallDeny" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

const googleComputeFirewallDeny: googleComputeFirewall.GoogleComputeFirewallDeny = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny.property.protocol">protocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny.property.ports">ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#protocol GoogleComputeFirewall#protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#ports GoogleComputeFirewall#ports}

---

### GoogleComputeFirewallLogConfig <a name="GoogleComputeFirewallLogConfig" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

const googleComputeFirewallLogConfig: googleComputeFirewall.GoogleComputeFirewallLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig.property.metadata">metadata</a></code> | <code>string</code> | This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"]. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#metadata GoogleComputeFirewall#metadata}

---

### GoogleComputeFirewallTimeouts <a name="GoogleComputeFirewallTimeouts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

const googleComputeFirewallTimeouts: googleComputeFirewall.GoogleComputeFirewallTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#create GoogleComputeFirewall#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#delete GoogleComputeFirewall#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#update GoogleComputeFirewall#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#create GoogleComputeFirewall#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#delete GoogleComputeFirewall#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.1/docs/resources/google_compute_firewall#update GoogleComputeFirewall#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeFirewallAllowList <a name="GoogleComputeFirewallAllowList" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

new googleComputeFirewall.GoogleComputeFirewallAllowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.get"></a>

```typescript
public get(index: number): GoogleComputeFirewallAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFirewallAllow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a>[]

---


### GoogleComputeFirewallAllowOutputReference <a name="GoogleComputeFirewallAllowOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

new googleComputeFirewall.GoogleComputeFirewallAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFirewallAllow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallAllow">GoogleComputeFirewallAllow</a>

---


### GoogleComputeFirewallDenyList <a name="GoogleComputeFirewallDenyList" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

new googleComputeFirewall.GoogleComputeFirewallDenyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.get"></a>

```typescript
public get(index: number): GoogleComputeFirewallDenyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFirewallDeny[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a>[]

---


### GoogleComputeFirewallDenyOutputReference <a name="GoogleComputeFirewallDenyOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

new googleComputeFirewall.GoogleComputeFirewallDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFirewallDeny;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallDeny">GoogleComputeFirewallDeny</a>

---


### GoogleComputeFirewallLogConfigOutputReference <a name="GoogleComputeFirewallLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

new googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig">GoogleComputeFirewallLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeFirewallLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallLogConfig">GoogleComputeFirewallLogConfig</a>

---


### GoogleComputeFirewallTimeoutsOutputReference <a name="GoogleComputeFirewallTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeFirewall } from '@cdktf/provider-google-beta'

new googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts">GoogleComputeFirewallTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeFirewallTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeFirewall.GoogleComputeFirewallTimeouts">GoogleComputeFirewallTimeouts</a>

---



